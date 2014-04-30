// creating a class
var CheckBoxList = function(id) {
  this.mainCheckBox = document.getElementById(id);
  this.subCheckBoxesList = document.getElementsByName("sub_" + id);
  this.listBlock = document.getElementById(id + "_list");
  this.listBlock.style.display = "none";
  this.events();
}

// method to display all nested checkboxes
CheckBoxList.prototype.displayNoneOrBlock = function() {
  var len = this.subCheckBoxesList.length;
  if (this.mainCheckBox.checked) {
    this.listBlock.style.display = "block";
    for (i = 0; i < len; i++) {
      this.subCheckBoxesList[i].checked = true; 
    }
    this.mainCheckBox.scrollIntoView(true);
  } else { 
      for (i = 0; i < len; i++) {
        this.subCheckBoxesList[i].checked = false;
      }
      this.listBlock.style.display = "none";
    }
}

// method for onclick event
CheckBoxList.prototype.events = function() {
  var that = this;
  this.mainCheckBox.onclick = function() { that.displayNoneOrBlock(); };
}

// creating instances of class
new CheckBoxList("colors");
new CheckBoxList("drinks");
new CheckBoxList("movies");
new CheckBoxList("bikes");
