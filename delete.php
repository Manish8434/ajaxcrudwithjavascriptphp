<?php

include('connection.php');

$del_data = file_get_contents("php://input");

$new_data = json_decode($del_data, true);

$id = $new_data['sid'];

$query = "DELETE FROM hospital_data WHERE id = {$id} ";

$run = mysqli_query($conn,$query);
if($run){
    echo "Data Deleted Successfully";
}else{
    echo "Something Went Wrong";
}




?>