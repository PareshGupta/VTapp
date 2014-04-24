//creating a class user 
function User() {
  this.getName();
  this.getAge();
}

User.prototype.getName = function() {
  this.name = prompt("Enter the name:");
  while (isNaN(this.name) === false || this.name == "") {
    alert("Enter a valid name please!!!");
    this.name = prompt("Enter the name again :");
  }
}

User.prototype.getAge = function () {
  this.age = prompt("Enter the age of " + this.name);
  while (isNaN(this.age) === true || this.age == "") {
    alert("Enter a valid age please!!!");
    this.age = prompt("Enter the age of " + this.name + " again");
  }
}

User.prototype.compare = function (obj) {
  if (this.age == obj.age) {
    alert("Both are of same age");
  } else {
      if (this.age > obj.age) {
        alert(this.name + " is older than " + obj.name);
      } else {
          alert(obj.name + " is older than " + this.name);
        }
    }
}

// instantiate two objects
var user1 = new User();
var user2 = new User();

// calling the method
user1.compare(user2);
document.write("Please Reload the page again.");