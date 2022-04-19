<?php

include('connection.php');

$data = file_get_contents("php://input");
$newData = json_decode($data,true);

$id = $newData['sid'];

$query = "SELECT * FROM hospital_data WHERE id = {$id}";

$run = mysqli_query($conn,$query);
if($run){
    $result = mysqli_num_rows($run);
if($result > 0){
    $data = array();
    while($finalData = mysqli_fetch_assoc($run)){
        $data[] = $finalData;
    }
}
}

echo json_encode($data);



?>