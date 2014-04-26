var Username = function () {
}

Username.prototype.setName = function(choice) {
  name = prompt("Enter the " + choice);
  while (isNaN(name) === false || name == "") {
    alert("Enter a valid name please!!!");
    name = prompt("Enter the " + choice);
    return name;
  }
}

window.onload = function() {
  var fullname = fname + " " + lname;
  alert("Hello " + fullname);
}

// first instance 
var first_name = new Username();
first_name.setName("First Name");
var fname = name;

// second instance
var last_name = new Username();
last_name.setName("Last Name");
var lname = name;
