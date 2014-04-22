//creating a class user 
function User(name) {
  this.name = name;
  this.age = prompt("Enter the age of " + name);

  while (isNaN(this.age) === true || this.age == "") {
    alert("Enter a valid age please!!!");
    this.age = prompt("Enter the age of " + name);
  }

  this.compare = function (obj) {
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
}

// instantiate two objects
var user1 = new User("Paresh");
var user2 = new User("Sameer");

// calling the method
user1.compare(user2);
document.write("Please Reload the page again.");