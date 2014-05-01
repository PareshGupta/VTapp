// creating a class
var CheckBoxList = function(id) {
  this.mainCheckBox = document.getElementById(id);
  this.subCheckBoxesList = document.getElementsByName("sub_" + id);
  this.listBlock = document.getElementById(id + "_list");
  this.listBlock.style.display = "none";
  this.events();
}

// method to check or uncheck  checkboxes
CheckBoxList.prototype.checkUncheckMainCheckBoxes = function() {
  if (this.mainCheckBox.checked) {  
    this.checkAndDisplaySubCheckBoxes(true);
  } else { 
    this.checkAndDisplaySubCheckBoxes(false);
  }
}

// method to display all sub checkboxes
CheckBoxList.prototype.checkAndDisplaySubCheckBoxes = function(choice) {
  var length = this.subCheckBoxesList.length;
  for (i = 0; i < length; i++) {
    this.subCheckBoxesList[i].checked = choice;
  }
  if (choice == true){
    this.listBlock.style.display = "block";
    this.mainCheckBox.scrollIntoView(choice);
  } else {
    this.listBlock.style.display = "none";
    this.mainCheckBox.scrollIntoView(choice);
  }
}

// method for onclick event
CheckBoxList.prototype.events = function() {
  var that = this;
  this.mainCheckBox.onclick = function() { that.checkUncheckMainCheckBoxes(); };
}

// creating instances of class
new CheckBoxList("colors");
new CheckBoxList("drinks");
new CheckBoxList("movies");
new CheckBoxList("bikes");
