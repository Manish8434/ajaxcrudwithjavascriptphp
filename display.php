<?php

include('connection.php');

$query = "SELECT * FROM hospital_data";

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