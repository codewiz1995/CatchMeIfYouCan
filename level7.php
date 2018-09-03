<?php
	session_start();
	if ( ! isset($_SESSION['token'])){
		$_SESSION['token'] = 5;
	}
	
	if($_SESSION["token"] <= 0){
		?>
	  <script type="text/javascript"> alert("Out of Tries, Try Again!"); location="index.php"; </script>
      <?php 
	}
?>

<!DOCTYPE html>
<html>
	<head>
	<?php
		require 'Prankster/script/script.php';
	?>
		<title>Hack Me If You Can - Level 6</title>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="boot/css/bootstrap.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	</head>


	<body>
	<label>Retries Available : <?php echo $_SESSION["token"]  ?> </label>
	<h2 class="form-signin-heading" align="center" color="gray">Level 7</h2><br>
		<img src="" alt="Level7" width="60%">
  </a>

	<div class="container">

		<form action="Lvl7Action.php" method="POST" class="form-signin">
				<label for="inputPassword" class="sr-only">KEY</label>
				<input type="password" placeholder="Enter the flag" name="keyBox" required id="inputflag" class="form-control"><br>
				<button class="btn btn-primary btn-block" type="submit">Submit the Flag</button>

		</form>
		
		</div>
		<p>
		 <?php
        require ('Prakster/temp/footer.php');
    ?>
		</p>
	</body>
</html>