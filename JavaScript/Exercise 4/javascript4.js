// creating a class Row
var Row = function(index){  
  this.row = document.getElementsByTagName("tr")[index];
  this.cell = this.row.getElementsByTagName("td");
  this.saveEvent();
}

// save event
Row.prototype.saveEvent = function() {
  var save = this.row.getElementsByClassName("save")[0];
  var that = this;
  save.onclick = function(){that.inputValues();}
}

// create anchor tag 
Row.prototype.createAnchorTag1 = function() {
  var anchor_tag1 = document.createElement("a");
  anchor_tag1.innerHTML ="Edit";
  anchor_tag1.setAttribute("class",'edit');
  anchor_tag1.setAttribute("href","#");
  return anchor_tag1;
}

//  create anchor tag
Row.prototype.createAnchorTag2 = function() {
  var anchor_tag2= document.createElement("a");
  anchor_tag2.innerHTML ="Delete";
  anchor_tag2.setAttribute("class",'del');
  anchor_tag2.setAttribute("href","#");
  return anchor_tag2;
}

// method to add values to the row
Row.prototype.inputValues = function() {
  var input = this.row.getElementsByTagName("input");
  var anchor1 = this.createAnchorTag1();
  var anchor2 = this.createAnchorTag2();
  this.cell[0].innerHTML = input[0].value;
  this.cell[1].innerHTML = input[0].value; 
  this.cell[2].replaceChild(anchor1,this.cell[2].childNodes[0]);
  this.cell[2].appendChild(anchor2);  
  this.editEvent();
  this.deleteEvent();
}

// edit event 
Row.prototype.editEvent = function() {
  var edit = this.row.getElementsByClassName("edit")[0];
  var that = this;
  edit.onclick = function(){that.editRowValues();};
}

// create Save button
Row.prototype.createButton = function() {
  var button_tag = document.createElement("button");
  button_tag.setAttribute("class","save");
  button_tag.innerHTML = "Save";
  return button_tag;
}

// method to edit the row
Row.prototype.editRowValues = function() {
  var input1 = document.createElement("input");
  input1.setAttribute("value",this.cell[0].innerText);
  var input2 = document.createElement("input");
  input2.setAttribute("value",this.cell[1].innerText);
  var save = this.createButton();
  this.cell[0].replaceChild(input1,this.cell[0].childNodes[0]);
  this.cell[1].replaceChild(input2,this.cell[1].childNodes[0]);
  this.cell[2].childNodes[1].remove();
  this.cell[2].replaceChild(save,this.cell[2].childNodes[0]); 
  this.saveEvent();
}

// delete event
Row.prototype.deleteEvent = function() {
  var del = this.row.getElementsByClassName("del")[0];
  var that = this;
  del.onclick = function(){that.deleteRow();};
}

// method to delete the row 
Row.prototype.deleteRow = function(){
  this.row.remove();
}

// creating a new class
var Table = function(id) {
  this.table = document.getElementById(id);
  this.addInstance();
  this.createRow();
}

// add event
Table.prototype.addInstance = function() {
  var add = document.getElementById("button");
  var that = this;
  add.onclick = function(){that.createRow();};
}

// creating rows and instances of Row class
Table.prototype.createRow = function() {
  var row = this.table.insertRow(-1);
  var row_attribute = row.setAttribute("class","tablerow");
  var input_tag1 = document.createElement("input");
  var input_tag2 = document.createElement("input");
  var button_tag = document.createElement("button");
  button_tag.setAttribute("class","save");
  button_tag.innerHTML = "Save";
  row.insertCell(0).appendChild(input_tag1);
  row.insertCell(1).appendChild(input_tag2);
  row.insertCell(2).appendChild(button_tag);
  new Row(document.getElementsByTagName("tr").length - 1);
}

// New Instance of Table
var add_row = new Table("table");
