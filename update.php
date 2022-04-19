<?php
include('connection.php');


$data = file_get_contents("php://input");
$newData = json_decode($data, true);

$id = $newData['id'];
$name = $newData['name'];
$email = $newData['email'];
$password = $newData['password'];
$cpassword = $newData['cpassword'];


$query = "UPDATE hospital_data set name = '$name',email = '$email', password = '$password',cpassword = '$cpassword' WHERE id = {$id}";

$run = mysqli_query($conn,$query);
if($run){
    echo "Data Updated Successfully";
}else{
    echo "Something Went Wrong";
}



?>