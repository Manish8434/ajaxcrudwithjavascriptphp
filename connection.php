<?php

$host_name = "localhost";
$username = "root";
$password = "";
$db_name = "ajaxcrudwithjsinphp";


$conn = mysqli_connect($host_name,$username,$password,$db_name);
if($conn){
    // echo "Connection Done";
}else{
    echo "Connection Failed";
}


?>