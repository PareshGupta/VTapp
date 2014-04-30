function User() {
  this.firstName = this.setName("First");
  this.lastName = this.setName("Last");
  this.getFullName();
}

//method to get name
User.prototype.setName = function(nametype) {
  do {
    var name = prompt("Please enter your " + nametype + "name");
  } while (this.validateName(name));
  return name;
}

// method to validate name
User.prototype.validateName = function(name) {
  if (name == "" || isNaN(name) == false ) {
    alert("Invalid Name!!! please enter again");
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

new User();
