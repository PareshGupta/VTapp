// creating a class
var Form = function(form_id){
  this.form_id = form_id;
  this.allcheckboxes = document.getElementsByName("days");
  this.none_checkbox = document.getElementById("none"); 
  
  // method for uncheck all checkboxes
  this.checkNone = function(){
    for(var i = 0; i < this.allcheckboxes.length; i++){
      this.allcheckboxes[i].checked = false;
    }
  }

  // method to select maximum of three checkboxes
  this.checkMaximumThreeCheckBoxes = function(){
    var total = 0;
    for(var i=0; i < this.allcheckboxes.length; i++){
      if(this.allcheckboxes[i].checked === true){
        this.none_checkbox.checked = false;
        total = total + 1;
      }
      
      if(total > 3){
        this.allcheckboxes[i].checked = false;
        alert("You can Maximum select 3 choices");
        return false;
      }    
    }
  }

  // method of creating event
  this.events = function(){
    var value = this;
    for(var i = 0; i < this.allcheckboxes.length; i++){
      this.allcheckboxes[i].onclick = function() {value.checkMaximumThreeCheckBoxes(); }
    }
    this.none_checkbox.onclick = function() {value.checkNone(); }
  }
}

var form = new Form("form");
form.events(); 
