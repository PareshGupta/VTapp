// creating object for new HTMl tags
var creatingElements = {
  createButton : function() {
    var button = document.createElement("button");
    button.setAttribute("class", "save");
    button.innerText = "Save";
    return button;
  },

  createAnchor : function(choice) {
    var anchor = document.createElement("a");
    anchor.innerText = choice;
    anchor.setAttribute("class", choice);
    anchor.setAttribute("href", "#");
    return anchor;
  },

  createInput : function(choice) {
    var input = document.createElement("input");
    input.setAttribute("value", choice.innerText);
    return input;
  }
}

// creating a class Row
var Row = function(index) {  
  this.row = document.getElementsByTagName("tr")[index];
  this.cell = this.row.getElementsByTagName("td");
  this.saveEvent();
}

// save event
Row.prototype.saveEvent = function() {
  var save = this.row.getElementsByClassName("save")[0];
  var that = this;
  save.onclick = function() { that.inputValues(); };
}

// method to add values to the row
Row.prototype.inputValues = function() {
  var input = this.row.getElementsByTagName("input");
  this.cell[0].innerText = input[0].value;
  this.cell[1].innerText = input[0].value; 
  this.cell[2].replaceChild(creatingElements.createAnchor("Edit"), this.cell[2].childNodes[0]);
  this.cell[2].appendChild(creatingElements.createAnchor("Delete"));  
  this.editAndDeleteEvent();
}

// edit and delete event 
Row.prototype.editAndDeleteEvent = function() {
  var edit = this.row.getElementsByClassName("Edit")[0];
  var del = this.row.getElementsByClassName("Delete")[0];
  var that = this;
  edit.onclick = function() { that.editRowValues(); };
  del.onclick = function() { that.row.remove(); };
}

// method to edit the row
Row.prototype.editRowValues = function() {
  this.cell[0] = this.insertInputTags(this.cell[0]);
  this.cell[1] = this.insertInputTags(this.cell[1]);
  this.cell[2].childNodes[1].remove();
  this.cell[2].replaceChild(creatingElements.createButton(), this.cell[2].childNodes[0]); 
  this.saveEvent();
}

// inserting values to cell1 and cell2
Row.prototype.insertInputTags = function(choice) {
  if (choice.innerText === "") {
    choice.appendChild(creatingElements.createInput(choice));
  } else {
    choice.replaceChild(creatingElements.createInput(choice), choice.childNodes[0]);  
  }
}

// creating a new class
var Table = function(id) {
  var that = this;
  this.table = document.getElementById(id);
  this.add = document.getElementById("button"); 
  this.add.onclick = function() { that.createRow(); };
  this.createRow();
}

// creating rows and instances of Row class
Table.prototype.createRow = function() {
  var row = this.table.insertRow(-1);
  row.setAttribute("class", "tablerow");
  row.insertCell(0).appendChild(document.createElement("input"));
  row.insertCell(1).appendChild(document.createElement("input"));
  row.insertCell(2).appendChild(creatingElements.createButton()); 
  new Row(document.getElementsByTagName("tr").length - 1);
}

// New Instance of Table
new Table("table");