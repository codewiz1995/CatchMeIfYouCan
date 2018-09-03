<?php
	session_start();	
	if ( ! isset($_SESSION['token'])){
		$_SESSION['token'] = 5;
	}
	$lpassword = $_POST['pass'];
	
	
	if (isset($lpassword)) {
		require 'connect.php';
		$query = mysqli_query($con, "SELECT * FROM users WHERE password='$lpassword'");
		if (mysqli_num_rows($query)==0) {
			$_SESSION['token'] = $_SESSION['token'] - 1;
		
		reload();
		
		}
		
		else {
			
			header("location: level6.php");
		}
	}	
	else {
		echo "Enter the password";
	}
function reload(){
	sleep(2);
	header("location: level5.php");
}

?>