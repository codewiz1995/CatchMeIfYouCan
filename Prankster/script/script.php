<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script>
            $(document).keydown(function(event){
            if(event.keyCode==123){
                return false;
            }
            else if(event.ctrlKey && event.shiftKey && event.keyCode==73){        
                  return false;  //Prevent from ctrl+shift+i
               }
            });
    
            
            document.onmousedown=disableclick;
            status="Right Click Disabled";
            function disableclick(event)
            {
              if(event.button==2)
               {
                 alert(status);
                 return false;    
               }  //Prevent from Right click
            }
            
            $(function(){

              $('.number-only').keypress(function(e) {
                    if(isNaN(this.value+""+String.fromCharCode(e.charCode))) return false;
              })
              .on("cut copy paste",function(e){
                    e.preventDefault();
              });

            });
            
    </script>