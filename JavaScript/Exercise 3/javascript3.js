// creating a class
var Form = function(form_id){
  this.form_id = form_id;

  // method to get all checkboxes
  this.getCheckBox = function(){
    var allcheckbox = document.getElementsByName("days");
    return allcheckbox;
  }
  
  // method for uncheck all checkboxes
  this.checkNone = function(){
    var all_checkboxes = this.getCheckBox();
    for(var i = 0; i < all_checkboxes.length; i++){
      all_checkboxes[i].checked = false;
    }
  }

  // method to select maximum of three checkboxes
  this.checkMaximumThreeCheckBoxes = function(){
    var checkboxes = this.getCheckBox();
    var none_checkbox = document.getElementById("none");
    var total = 0;
    
    for(var i=0; i < checkboxes.length; i++){
      if(checkboxes[i].checked === true){
      none_checkbox.checked = false;
      total = total + 1;
      }
  
      if(total > 3){
        checkboxes[i].checked = false;
        alert("You can Maximum select three choices");
        return false;
      }    
    }
  }

  // method of creating event
  this.events = function(){
    var none_checkbox = document.getElementById("none"); 
    var checkbox = this.getCheckBox();
    var value = this;
    for(var i = 0; i < checkbox.length; i++){
      checkbox[i].onclick = function() {value.checkMaximumThreeCheckBoxes(); }
    }
    none_checkbox.onclick = function() {value.checkNone(); }
  }
}

var form1 = new Form("form1");
form1.events(); 