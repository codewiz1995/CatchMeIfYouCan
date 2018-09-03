<?php
	session_start();
	$level_key = $_POST['flag'];
	
	
	if (isset($level_key)) {
		require 'connect.php';
		$query = mysqli_query($con, "SELECT * FROM Level3 WHERE key_level3='$level_key'");
		if (mysqli_num_rows($query)==0) {
			$_SESSION['token'] = $_SESSION['token'] - 1;
			echo '<script>alert("Try again")</script>';
			reload();
				
		}
		else{
			
			header("location: Level4.php");
			
		}
	}
	else {
		echo "Enter the flag";
		
	}
	
function reload(){
	
	header("location: Level3.php");
	
}
	
?>