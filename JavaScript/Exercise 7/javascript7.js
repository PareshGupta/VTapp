function UserName() {
  this.firstName = this.setName("First");
  this.lastName = this.setName("Last");
  this.alertFullName();
}

//method to get name
UserName.prototype.setName = function(nametype) {
  do {
    var name = prompt("Please enter your " + nametype + "name")
  }while(this.checkName(name)) ;
  return name;
}

// method to validate name
UserName.prototype.checkName = function(name) {
  if (name == "" || isNaN(name) == false ) {
    alert("Invalid Name please enter again");
    return true;
  }
}

// method to alert name
UserName.prototype.alertFullName = function() {
  alert("Hello " + this.firstName + " " + this.lastName);
}

var user = new UserName();
