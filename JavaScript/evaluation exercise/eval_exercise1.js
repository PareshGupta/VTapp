var Row = function(index) {
  this.row = document.getElementsByTagName("tr")[index];
  this.cell = this.row.getElementsByTagName("td");
  this.deleteEvent();
}

// delete method
Row.prototype.deleteEvent = function() {
  var that = this;
  var del = this.row.getElementsByClassName("del")[0];
  del.onclick = function() { that.row.remove(); };
}

// new class Table to add row
var Table = function(id) {
  var that = this;
  this.table = document.getElementById(id);
  this.add = document.getElementById("submit"); 
  this.nameField = document.getElementById("name");
  this.ageField = document.getElementById("age");
  this.searchField = document.getElementById("search");
  this.add.onclick = function() { 
    that.validateNameAndAge();
    that.nameField.value = "";
    that.ageField.value = "";
    that.nameField.focus();
  };
}

// method to validate Name and Age
Table.prototype.validateNameAndAge = function() {
  if (isNaN(this.nameField.value) && !(isNaN(this.ageField.value))) {
    this.createRowAndCells();
  } else {
    alert("Enter Valid Data");
  }
}

// method to create new row instances
Table.prototype.createRowAndCells = function() {
  var row = this.table.insertRow(1);
  var nameColumn = row.insertCell(0);
  var ageColumn = row.insertCell(1);
  var DeleteColumn = row.insertCell(2);
  nameColumn.innerText = this.nameField.value;
  ageColumn.innerText = this.ageField.value;
  DeleteColumn.appendChild(createElement.button());
  new Row(1);
}

// method to search event
Table.prototype.searchEvent = function() {
  var that = this;
  this.searchField.onkeyup = function() { that.searchDataList(); }
}

// method to search the data
Table.prototype.searchDataList = function() {
  var rows = this.table.getElementsByTagName("tr");
  for (i = 1; i < rows.length; i++) {
    if (this.searchField.value == "") {
      rows[i].style.display = "table-row";
    } else if (!rows[i].innerText.indexOf(this.searchField.value)) {
      rows[i].style.display = "table-row";
    } else {
      rows[i].style.display = "none";
    }
  }
}

var table = new Table("data_table");
table.searchEvent();

// object to create element
var createElement = {
  button : function() {
    var del = document.createElement("button");
    del.setAttribute("class", "del");
    del.innerText = "Delete";
    return del ;
  }
}

