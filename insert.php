<?php

include('connection.php');
//Retriving data
$mydata = file_get_contents("php://input");
$data = json_decode($mydata, true);

//Now fetching Data
$id = $data['id'];
$name = $data['name'];
$email = $data['email'];
$password = $data['password'];
$cpassword = $data['cpassword'];

// if(!empty($name) && !empty($email) && !empty($password) && !empty($cpassword)){

// $query = "INSERT INTO hospital_data (name,email,password,cpassword) VALUES ('$name','$email','$password','$cpassword')";

// $run = mysqli_query($conn,$query);

// if($run){
//     echo "Hospital Added Succesfully";
// }else{
//     echo "Something Went Wrong";
// }

// }else{
//     echo "Please Fill all Input Field";
// }

if(!empty($name) && !empty($email) && !empty($password) && !empty($cpassword)){

    $query = "INSERT INTO hospital_data (id, name, email, password, cpassword) VALUES ('$id','$name','$email','$password','$cpassword') ON DUPLICATE KEY UPDATE name='$name',email='$email',password='$password',cpassword='$cpassword'";


$run = mysqli_query($conn,$query);

if($run){
    echo "Hospital Added Succesfully";
}else{
    echo "Something Went Wrong";
}

}else{
    echo "Please Fill all Input Field";
}

?>