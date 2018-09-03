String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ''); };

function chkLogin(txtUser, txtPass)
{
    var ret = true;
    
    if(document.getElementById(txtUser).value.trim() == '')
    {
        ret = false;
    }
    if(document.getElementById(txtPass).value.trim() == '')
    {
        ret = false;
    }
    
    if(!ret)
    {
        document.getElementById('trErr').style.display = '';
        document.getElementById('divErr').innerHTML = 'Both Username and Password cannot be empty';
    }
    
    return ret;
}

function chkMemberActivate(txtOldPass, txtNewPass, txtConfirmNewPass)
{
    var ret = true;
    
    if(document.getElementById(txtOldPass).value.trim() == '')
    {
        ret = false;
    }
    if(document.getElementById(txtNewPass).value.trim() == '')
    {
        ret = false;
    }
    if(document.getElementById(txtConfirmNewPass).value.trim() == '')
    {
        ret = false;
    }
    
    if(!ret)
    {
        document.getElementById('trErr').style.display = '';
        document.getElementById('divErr').innerHTML = 'All fields are mandatory. Please fill them with care';
    }
    else
    {
        if(document.getElementById(txtNewPass).value != document.getElementById(txtConfirmNewPass).value)
        {
            ret = false;
            document.getElementById('trErr').style.display = '';
            document.getElementById('divErr').innerHTML = 'Your new password entries did not match';
        }
        else if(document.getElementById(txtOldPass).value == document.getElementById(txtNewPass).value)
        {
            ret = false;
            document.getElementById('trErr').style.display = '';
            document.getElementById('divErr').innerHTML = 'New password cannot be identical to the old password';
        }
    }
    
    return ret;
}

function chkChangePassword(txtCurrentPass, txtNewPass, txtConfirmNewPass)
{
    var ret = true;
    
    if(document.getElementById(txtCurrentPass).value.trim() == '')
    {
        ret = false;
    }
    if(document.getElementById(txtNewPass).value.trim() == '')
    {
        ret = false;
    }
    if(document.getElementById(txtConfirmNewPass).value.trim() == '')
    {
        ret = false;
    }
    
    if(!ret)
    {
        document.getElementById('trErr').style.display = '';
        document.getElementById('divErr').innerHTML = 'All fields are mandatory. Please fill them with care';
    }
    else
    {
        if(document.getElementById(txtNewPass).value != document.getElementById(txtConfirmNewPass).value)
        {
            ret = false;
            document.getElementById('trErr').style.display = '';
            document.getElementById('divErr').innerHTML = 'Your new password entries did not match';
        }
        else if(document.getElementById(txtCurrentPass).value == document.getElementById(txtNewPass).value)
        {
            ret = false;
            document.getElementById('trErr').style.display = '';
            document.getElementById('divErr').innerHTML = 'New password cannot be identical to the current password';
        }
    }

    var resetMsg = document.getElementById('resetMsg');
    if (resetMsg != null) {
        resetMsg.style.display = 'none';
        document.getElementById('resetMsgSpace').style.display = 'none';  
    }
    
    return ret;
}

function chkResetPassword(memberID, txtEmail)
{
    var ret = true;
    
    if(document.getElementById(memberID).value.trim() == '')
    {
        ret = false;
    }
    if(document.getElementById(txtEmail).value.trim() == '')
    {
        ret = false;
    }
    
    if(!ret)
    {
        document.getElementById('trErr').style.display = '';
        document.getElementById('divErr').innerHTML = 'Both EPF Member ID and Email Address cannot be empty';
    }
    else if(!validateEmail(document.getElementById(txtEmail).value.trim(), true, false))
    {
        document.getElementById('trErr').style.display = '';
        document.getElementById('divErr').innerHTML = 'Email Address that you have entered is invalid';
    
        ret = false;
    }
    
    return ret;
}

function validateEmail(addr,man,db) {
    if (addr == '' && man) {
       if (db) alert('email address is mandatory');
       return false;
    }
    if (addr == '') return true;

    var invalidChars = '\/\'\\ ";:?!()[]\{\}^|';
    for (i=0; i<invalidChars.length; i++) {
       if (addr.indexOf(invalidChars.charAt(i),0) > -1) {
          if (db) alert('email address contains invalid characters');
          return false;
       }
    }
    for (i=0; i<addr.length; i++) {
       if (addr.charCodeAt(i)>127) {
          if (db) alert("email address contains non ascii characters.");
          return false;
       }
    }

    var atPos = addr.indexOf('@',0);

    if (atPos == -1) {
       if (db) alert('email address must contain an @');
       return false;
    }
    if (atPos == 0) {
       if (db) alert('email address must not start with @');
       return false;
    }
    if (addr.indexOf('@', atPos + 1) > - 1) {
       if (db) alert('email address must contain only one @');
       return false;
    }
    if (addr.indexOf('.', atPos) == -1) {
       if (db) alert('email address must contain a period in the domain name');
       return false;
    }
    if (addr.indexOf('@.',0) != -1) {
       if (db) alert('period must not immediately follow @ in email address');
       return false;
    }
    if (addr.indexOf('.@',0) != -1){
       if (db) alert('period must not immediately precede @ in email address');
       return false;
    }
    if (addr.indexOf('..',0) != -1) {
       if (db) alert('two periods must not be adjacent in email address');
       return false;
    }
    
    /*
    var suffix = addr.substring(addr.lastIndexOf('.')+1);
    if (suffix.length != 2 && suffix != 'com' && suffix != 'net' && suffix != 'org' && suffix != 'edu' && suffix != 'int' && suffix != 'mil' && suffix != 'gov' & suffix != 'arpa' && suffix != 'biz' && suffix != 'aero' && suffix != 'name' && suffix != 'coop' && suffix != 'info' && suffix != 'pro' && suffix != 'museum') {
       if (db) alert('invalid primary domain in email address');
       return false;
    }
    */
    
    return true;
}

function chkHousingLoan(txtLoanNo)
{
    var ret = true;
    
    if(document.getElementById(txtLoanNo).value.trim() == '')
    {
        ret = false;
    }
    
    if(!ret)
    {
        document.getElementById('trTopSpace').style.display = '';
        document.getElementById('trMsg').style.display = '';
        document.getElementById('divMsg').innerHTML = 'Loan No cannot be empty';
    }
    
    return ret;
}

function chkProfileUpdate(email, tel, mob)
{
    //debugger;
    
    var ret = true;
    var numReg = /^[0-9]+$/;
    
    if(document.getElementById(email).value.trim() != '')
    {
        if(!validateEmail(document.getElementById(email).value.trim(), true, false))
        {
            msg = 'Invalid Email Address';
            ret = false;
        }
    }
    
    if(ret && document.getElementById(tel).value.trim() != '')
    {
        if(!numReg.test(document.getElementById(tel).value.trim()))
        {
            msg = 'Both Phone No and Mobile No can only contain numbers';
            ret = false;
        }
    }
    
    if(ret && document.getElementById(mob).value.trim() != '')
    {
        if(!numReg.test(document.getElementById(mob).value.trim()))
        {
            msg = 'Both Phone No and Mobile No can only contain numbers';
            ret = false;
        }
    }
    
    if(!ret)
    {
        document.getElementById('trErr').style.display = '';
        document.getElementById('divErr').innerHTML = msg;
    }
    
    return ret;
}

