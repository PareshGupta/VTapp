function User() {
  this.firstName = this.setName("First");
  this.lastName = this.setName("Last");
}

//method to get name
User.prototype.setName = function(nametype) {
  do {
    var name = prompt("Please enter your " + nametype + "name");
  } while (this.validateName(name,nametype));
  return name;
}

// method to validate name
User.prototype.validateName = function(name,nametype) {
  if (name == "" || isNaN(name) == false ) {
    alert("Invalid " + nametype +"Name!!! please enter again");
    return true;
  }
}

// method to append name
User.prototype.getFullName = function() {
  var fullName = "Hello " + this.firstName + " " + this.lastName;
  var div = document.getElementById("box");
  alert(fullName);
  div.innerHTML = fullName; 
}

var user = new User();
user.getFullName();

