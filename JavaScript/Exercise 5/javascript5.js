// creating a class
var Checkbox = function(id) {
  this.main_checkbox = document.getElementById(id);
  this.sub_checkboxes = document.getElementsByName("sub_" + id);
  this.sub_list = document.getElementById(id + "_list");
  this.sub_list.style.display = "none";
  this.events();
}

// method to display all nested checkboxes
Checkbox.prototype.displayNoneOrBlock = function() {
  if(this.main_checkbox.checked == false) {
    this.sub_list.style.display = "none";
  } else {
      if(this.main_checkbox.checked == true) {
        this.sub_list.style.display = "block";
        for(var i = 0; i < this.sub_checkboxes.length; i++) {
          this.sub_checkboxes[i].checked = true; 
        }
        this.main_checkbox.scrollIntoView(true);
      }
    }
}

// method for onclick event
Checkbox.prototype.events = function() {
  var value = this;
  this.main_checkbox.onclick = function() { value.displayNoneOrBlock(); };
}

// creating instances of class
var color_checkbox = new Checkbox("colors");
var drink_checkbox = new Checkbox("drinks");
var movie_checkbox = new Checkbox("movies");
var bike_checkbox = new Checkbox("bikes");
