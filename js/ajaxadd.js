// Display Ajax Function Start Here

function displayData(){
    let displayTable = document.getElementById("displayTable");

    let display = new XMLHttpRequest();
    display.open('GET','display.php',true);
    display.responseType = "json";

    display.onload = showingData;
    function showingData(){
        displayTable.innerHTML = "";
        if(display.status === 200){
            let x = display.response;
            displayTable.innerHTML = "<tr><th>" + "ID" + "</th><th>" + "Name" + "</th><th>" + "Email" + "</th><th>" + "Password" + "</th><th>" + "Confirm Password" + "</th><th>" + "Operation" + "</th></tr>";
            for(let i = 0; i < x.length; i++){
                // console.log(x.length)
                displayTable.innerHTML += "<tr><td>" + x[i].id + "</td><td>" + x[i].name + "</td><td>" + x[i].email + "</td><td>" + x[i].password + "</td><td>" + x[i].cpassword +"</td><td><button class = 'btn btn-warning btn-sm mr-2 btn-edit' data-sid=" + x[i].id +  ">Edit</button><button class = 'btn btn-danger btn-sm btn-delete' data-sid=" + x[i].id +  ">Delete</button></td></tr>";
            }
        }else{
            console.log("problem Occured");
        }
        hospital_delete();
        edit_hospital();
    }
    display.send();
}
displayData();
//Display Ajax Function Ends Here

//Delete Ajax Function Start From here
function hospital_delete(){
let btn_delete = document.getElementsByClassName('btn-delete');
// console.log(btn_delete.length);
for(let i = 0;i < btn_delete.length; i++){
    btn_delete[i].addEventListener('click',function(){
        id = btn_delete[i].getAttribute("data-sid");
        // console.log('button clicked', id);
        const delData = new XMLHttpRequest();
        delData.open('POST','delete.php',true);

        delData.onload = deleteData;
        function deleteData(){
            if(delData.status === 200){
                resultMessage.innerHTML = '<h5 class="text-success">' + delData.response + '</h5>';
                displayData(); 
            }
        }
      id_data = {sid:id}
      newid_data = JSON.stringify(id_data);

      delData.send(newid_data);
    })
}

}
//Delete Ajax Function Start From here

//Edit Ajax Function Start From here

function  edit_hospital(){
    
    let btn_edit = document.getElementsByClassName('btn-edit');
    let hosid = document.getElementById('hos_id');
    let nameid = document.getElementById("name_id");
    let emailid = document.getElementById("email_id");
     let passid = document.getElementById("pass_id");
     let cpassid = document.getElementById("cpass_id");
    console.log(btn_edit.length);
    for(let i = 0; i < btn_edit.length;i++){
        btn_edit[i].addEventListener('click',function(){
         id = btn_edit[i].getAttribute('data-sid');
         $('#edithospital').modal('show');
         console.log('button clicked', id);

         const editData = new XMLHttpRequest();
         editData.open('POST', 'edit.php',true);
         editData.responseType = "json";
         editData.onload = editingData;
         function editingData(){
             if(editData.status === 200){
                 console.log(editData.response[0].name);
                hosid.value = editData.response[0].id;
                nameid.value = editData.response[0].name;
                emailid.value = editData.response[0].email;
                passid.value = editData.response[0].password;
                cpassid.value = editData.response[0].cpassword;
             }
         }
         sendData = {sid:id}
         finalsend = JSON.stringify(sendData);

         editData.send(finalsend);
        })
    }
}


//Edit Ajax Function Ends From here


//Update Data Start Here
let updateButon = document.getElementById("updateButton");
updateButon.addEventListener("click", function(e){
    e.preventDefault();
    console.log("button clicked");
    //Here we Grab the all value from the Input of Form.
    let hosid = document.getElementById('hos_id').value;
    let nameid = document.getElementById("name_id").value;
    let emailid = document.getElementById("email_id").value;
    let passid = document.getElementById("pass_id").value;
    let cpassid = document.getElementById("cpass_id").value;

    //This is to Display response Message
    let resultMessage = document.getElementById("resultMessage");
    // console.log(nameid,emailid,passid,cpassid);

    //Creating http Request
    const sendData = new XMLHttpRequest();
    //Initialising Request
    sendData.open('POST','update.php',true);
    //Handeling Request
    sendData.onload = storeData;
    function storeData(){
        if(sendData.status === 200){
            resultMessage.innerHTML = '<h5 class="text-success">' + sendData.response + '</h5>'; 
            document.getElementById("hospitalForm").reset();
            $('#edithospital').modal('hide');
            setTimeout(function(){
              $('#resultMessage').hide('slow');
            }, 3000);
            displayData();
           
        }
    }
   //Here we gathered the Data that we are Sending.
    let data = {id:hosid,name:nameid,email:emailid,password:passid,cpassword:cpassid};
    // console.log(data);
    //Converting the json data to string format.
    let myData = JSON.stringify(data);

    //Now finally we Send the Data
    sendData.send(myData);
    // console.log(myData);
})

// Insert Data Starts here

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function(e){
    e.preventDefault();
    console.log("button clicked");
    //Here we Grab the all value from the Input of Form.
    let hosid = document.getElementById('hosid').value;
    let nameid = document.getElementById("nameid").value;
    let emailid = document.getElementById("emailid").value;
    let passid = document.getElementById("passid").value;
    let cpassid = document.getElementById("cpassid").value;

    //This is to Display response Message
    let resultMessage = document.getElementById("resultMessage");
    // console.log(nameid,emailid,passid,cpassid);

    //Creating http Request
    const sendData = new XMLHttpRequest();
    //Initialising Request
    sendData.open('POST','insert.php',true);
    //Handeling Request
    sendData.onload = storeData;
    function storeData(){
        if(sendData.status === 200){
            resultMessage.innerHTML = '<h5 class="text-success">' + sendData.response + '</h5>'; 
            document.getElementById("hospitalForm").reset();
            $('#addHospitalDetails').modal('hide');
            setTimeout(function(){
              $('#resultMessage').hide('slow');
            }, 3000);
            displayData();
           
        }
    }
   //Here we gathered the Data that we are Sending.
    let data = {id:hosid,name:nameid,email:emailid,password:passid,cpassword:cpassid};
    // console.log(data);
    //Converting the json data to string format.
    let myData = JSON.stringify(data);

    //Now finally we Send the Data
    sendData.send(myData);
    // console.log(myData);
})