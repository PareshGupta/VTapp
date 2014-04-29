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
  if (this.mainCheckBox.checked) {
    this.listBlock.style.display = "block";
    for (var i = 0; i < this.subCheckBoxesList.length; i++) {
      this.subCheckBoxesList[i].checked = true; 
    }
    this.mainCheckBox.scrollIntoView(true);
  } else { 
    this.listBlock.style.display = "none";
    }
}

// method for onclick event
CheckBoxList.prototype.events = function() {
  var that = this;
  this.mainCheckBox.onclick = function() { that.displayNoneOrBlock(); };
}

// creating instances of class
var colorCheckBox = new CheckBoxList("colors");
var drinkCheckBox = new CheckBoxList("drinks");
var movieCheckBox = new CheckBoxList("movies");
var bikeCheckBox = new CheckBoxList("bikes");
