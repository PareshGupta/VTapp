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
  save.onclick = function(){ that.inputValues(); };
}

// method to add values to the row
Row.prototype.inputValues = function() {
  var input = this.row.getElementsByTagName("input");
  var edit = this.createAnchorTag("Edit");
  var del = this.createAnchorTag("Delete");
  this.cell[0].innerHTML = input[0].value;
  this.cell[1].innerHTML = input[0].value; 
  this.cell[2].replaceChild(edit, this.cell[2].childNodes[0]);
  this.cell[2].appendChild(del);  
  this.editAndDeleteEvent();
}

// edit and delete event 
Row.prototype.editAndDeleteEvent = function() {
  var edit = this.row.getElementsByClassName("Edit")[0];
  var del = this.row.getElementsByClassName("Delete")[0];
  var that = this;
  edit.onclick = function(){ that.editRowValues(); };
  del.onclick = function(){ that.row.remove(); };
}

// create Save button
Row.prototype.createButton = function() {
  var button_tag = document.createElement("button");
  button_tag.setAttribute("class", "save");
  button_tag.innerHTML = "Save";
  return button_tag;
}

// create Anchor tag 
Row.prototype.createAnchorTag = function(choice) {
  var anchor_tag = document.createElement("a");
  anchor_tag.innerHTML = choice;
  anchor_tag.setAttribute("class", choice);
  anchor_tag.setAttribute("href", "#");
  return anchor_tag;
}

// create Input tag
Row.prototype.createInputTag = function(choice) {
  var input = document.createElement("input");
  input.setAttribute("value", choice.innerText);
  return input;
}

// method to edit the row
Row.prototype.editRowValues = function() {
  var input1 = this.createInputTag(this.cell[0]);
  var input2 = this.createInputTag(this.cell[1]);
  var save = this.createButton();
  this.cell[0].replaceChild(input1,this.cell[0].childNodes[0]);
  this.cell[1].replaceChild(input2,this.cell[1].childNodes[0]);
  this.cell[2].childNodes[1].remove();
  this.cell[2].replaceChild(save,this.cell[2].childNodes[0]); 
  this.saveEvent();
}

// creating a new class
var Table = function(id) {
  var that = this;
  this.table = document.getElementById(id);
  this.add = document.getElementById("button"); 
  this.add.onclick = function(){ that.createRow(); };
  this.createRow();
}

// creating new tags
Table.prototype.createTags = function(choice) {
  var inputTag = document.createElement(choice);
  return inputTag; 
}

// creating new button tags
Table.prototype.createButtonTags = function() {
  var buttonTag = document.createElement("button");
  buttonTag.setAttribute("class", "save");
  buttonTag.innerHTML = "Save";
  return buttonTag;
}

// creating rows and instances of Row class
Table.prototype.createRow = function() {
  var row = this.table.insertRow(-1);
  row.setAttribute("class", "tablerow");
  row.insertCell(0).appendChild(this.createTags("input"));
  row.insertCell(1).appendChild(this.createTags("input"));
  row.insertCell(2).appendChild(this.createButtonTags());
  new Row(document.getElementsByTagName("tr").length - 1);
}

// New Instance of Table
var add_row = new Table("table");
