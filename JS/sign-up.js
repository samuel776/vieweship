function validInput(){

var form = document.getElementById("form");
var fName = document.getElementById("fname").Value.trim();
var lName = document.getElementById("lname").Value.trim();
var email = document.getElementById("email").Value.trim();
var password = document.getElementById("password").Value.trim();
var cPassword = document.getElementById("cpassword").Value.trim();

if(fname === ""){
    setErrorFor(fname, " First name can not be empty");
} else{
    setSuccessFor(fname);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validInput();
 }
}
