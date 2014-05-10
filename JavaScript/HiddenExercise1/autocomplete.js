var personNames = [ { "name" : "Luigi Damiano" }, 
  { "name" : "Zenith Coboro" }, 
  { "name" : "Zig Ziglar" },
  { "name" : "Steve Costner" }, 
  { "name" : "Bill Grazer" }, 
  { "name" : "Timothy Frazer" },
  { "name" : "Boris Becker" }, 
  { "name" : "Glenn Gladwich" }, 
  { "name" : "Jim Jackson" },
  { "name" : "Aaron Kabin" }, 
  { "name" : "Roy Goldwin" }, 
  { "name" : "Jason Goldberg" },
  { "name" : "Tim Ferris" }, 
  { "name" : "Buck Singham" }, 
  { "name" : "Malcom Gladwell" },
  { "name" : "Joy Rabura" }, 
  { "name" : "Vid Luther" }, 
  { "name" : "Tom Glicken" },
  { "name" : "Ray Baxter" }, 
  { "name" : "Ari Kama" }, 
  { "name" : "Kenichi Suzuki" },
  { "name" : "Rick Olson" } ]

//  creating Class
function Names() {
  this.name = document.getElementById('nameBox');
  this.nameList = document.getElementById("container");
  this.nameList.style.display = "none";
  var that = this;
  var nameArray = new Array();

//  method to search the name
  this.setName = function() {
    this.clearName();
    if (this.name.value == "") {
      this.nameList.innerHTML = "";
    } else {
      for (i = 0; i < personNames.length; i++) {
        if (!personNames[i]["name"].indexOf(this.name.value)) {
          nameArray.push(personNames[i]["name"]);
        }
      }
      this.displayNameList(nameArray);
    } 
  }

//  method to create and display name-list
  this.displayNameList = function(obj) {
    for (var i = 0; i < obj.length; i++) {
      if (obj.length > 0) {
        var para = document.createElement("p");
        var text = document.createTextNode(obj[i]);
        para.appendChild(text);
        this.nameList.appendChild(para);
        this.nameList.style.display = "block";
        para.onclick = function() {
          that.name.value = this.textContent;
        }
      }
    }
  }

  this.clearName = function() {
    this.nameList.innerHTML = '';
    this.nameList.style.display = 'none';
    nameArray.splice(0,nameArray.length);
  }

  this.event = function() {
    this.name.onkeyup = function() { that.setName(); };
  }
}
  
// creating Object
var person = new Names();
person.event();

window.onclick = function() {
  person.nameList.style.display = "none";
}