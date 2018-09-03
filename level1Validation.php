<?php
session_start();


	$level_key = $_POST['flag'];

if (isset($level_key)) {
		require 'connect.php';
		$query = mysqli_query($con,"SELECT * FROM level1 WHERE key_level1='$level_key'");
		if (mysqli_num_rows($query)==0) {
			$_SESSION['token'] = $_SESSION['token'] - 1;
			echo '<script>alert("Try again")</script>';
			reload();
				
		}
		else{
			
			header("location: Level2.php");
			
		}
	}
	else {
		echo "Enter the level key";
		
	}
	
function reload(){
	
	header("location: Level1.php");
	
}
	
?>

