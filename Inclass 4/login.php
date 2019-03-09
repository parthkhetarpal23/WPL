<?php
session_start();

$flag=true;
if(empty($_POST["name"]) || strlen($_POST["password"])<6 || empty($_POST["username"]))
  $flag=false;
  if($flag)
  {
    $_SESSION['name']=$_POST["name"];
    $_SESSION['username']=$_POST["username"];
    header('Location:welcome.php');
  }
  else {
    header('Location:login.html');
  }

?>
