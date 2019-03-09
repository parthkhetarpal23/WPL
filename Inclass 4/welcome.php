<?php
session_start();
if(isset($_SESSION['name']) && isset($_SESSION['username']))
{
  echo "WELCOME ",$_SESSION['name'],"!!";
  echo "<br>";
  echo "USERNAME: ",$_SESSION['username'],"!";
}
else
{
  header('Location:login.html');
}
 ?>
