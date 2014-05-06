var person = 
[ {"name":"Luigi Damiano"},
  {"name":"Zenith Coboro"},
  {"name":"Zig Ziglar"},
  {"name":"Steve Costner"},
  {"name":"Bill Grazer"},
  {"name":"Timothy Frazer"},
  {"name":"Boris Becker"},
  {"name":"Glenn Gladwich"},
  {"name":"Jim Jackson"},
  {"name":"Aaron Kabin"},
  {"name":"Roy Goldwin"},
  {"name":"Jason Goldberg"},
  {"name":"Tim Ferris"},
  {"name":"Buck Singham"},
  {"name":"Malcom Gladwell"},
  {"name":"Joy Rabura"},
  {"name":"Vid Luther"},
  {"name":"Tom Glicken"},
  {"name":"Ray Baxter"},
  {"name":"Ari Kama"},
  {"name":"Kenichi Suzuki"},
  {"name":"Rick Olson"} ]

//  creating Class
function Names(person) {
  this.name = person;
  this.inputBox = document.getElementById('nameBox');
  this.searchListBox = document.getElementById("container");
  this.searchListBox.style.display = "none";

//  method to search name
  this.searchName = function() {
    this.clearResult();
    if (this.inputBox.value !== " ") {
      for (i = 0; i < this.name.length; i++) {
        if (this.name[i]["name"].indexOf(this.inputBox.value) === 0) {
          this.displayName();
        }
      }
    } 
  }

//  method to create and display name-list
  this.displayName = function() {
    var that = this;
    var para = document.createElement("p");
    var text = document.createTextNode(this.name[i]['name']);
    para.appendChild(text);
    para.onclick = function() {
      that.inputBox.value = this.textContent;
    }
    this.searchListBox.appendChild(para);
    this.searchListBox.style.display = "block";
  }

  this.clearResult = function() {
    this.searchListBox.innerHTML = '';
    this.searchListBox.style.display = 'none';
  }

  this.event = function() {
    var that = this;
    this.inputBox.onkeyup = function() { that.searchName(); };
  }
}
  
// creating Object
var personName = new Names(person);
personName.event();

window.onclick = function() {
  personName.searchListBox.style.display = "none";
}