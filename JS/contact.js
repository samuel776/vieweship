function validation() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("country").value;
  var subject = document.getElementById("subject").value;
  var error_message = document.getElementById("error_message");
  var text;
  error_message.style.padding = "10px";

  if (fname.length < 4 && fname === "") {
    text = " Name should have greater than 4 characters";
    error_message.innerHTML = text;
    return false;
  }
  if (lname.length < 4 && lname === "") {
    text = " Name should have greater than 4 characters";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = " Please Enter a valid email";
    error_message.innerHTML = text;
    return false;
  }
  if (subject.length <= 20) {
    text = " Please your subject is too small";
    error_message.innerHTML = text;
    return false;
  }
  alert("Successfully submitted");
  return true;
}
document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  validation();
};
