function MoveCountries() {
  this.list1 = document.getElementById('countrylist1');
  this.list2 = document.getElementById("countrylist2");
  this.add = document.getElementById("add");
  this.remove = document.getElementById("remove");
  // this.events();

  // method for onclick event
  this.addOrRemoveEvents = function() {
    var that = this;
    this.add.onclick = function() {that.moveCountryNames1();};
    this.remove.onclick = function() {that.moveCountryNames2();};
  }

  // method to move countries from first list
  this.moveCountryNames1 = function() {
    for (var i = 0; i < this.list1.options.length; i++) {
      if (this.list1.options[i].selected) {
        this.list2.appendChild(this.list1.options[i--]);
      }
    }
  } 

  // method to move countries from second list
  this.moveCountryNames2 = function() {
    for (var i = 0; i < this.list2.options.length; i++) {
      if (this.list2.options[i].selected) {
        this.list1.appendChild(this.list2.options[i--]);
      }
    }
  } 
}

var countries = new MoveCountries();
countries.addOrRemoveEvents();


// issues...variable name (add_list)...
// remove button method...same as moveCountryNames() ..
      // or 
// one method for both;