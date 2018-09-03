<?php

sessio_start();

unset($_SESSION['ses_usr']);
session_destroy();
header("location.level0.php");

?>