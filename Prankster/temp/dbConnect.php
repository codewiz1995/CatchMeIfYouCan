<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ctf_prankster";
    
    $dbconn = mysqli_connect($server, $username, $password, $dbname) OR die('Error:'.mysqli_connect_error());
?>