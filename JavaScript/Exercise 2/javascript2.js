// creating a class
function Form(form_id){
  this.form_id = form_id;

//creating method to get checkbox elements 
  this.getAllCheckboxes = function(){
    var form = document.getElementById(this.form_id);   
    var checkbox = form.getElementsByClassName("check");
    return checkbox;
  }

//method to check all checkboxes  
  this.checkAll = function(){
    this.checkAllOrNone(true);  
  }

// method to uncheck all checkboxes
  this.uncheckAll = function(){
    this.checkAllOrNone(false); 
  }

// method for iterate to all checkboxes
  this.checkAllOrNone = function(choice){
    var all_checkboxes = this.getAllCheckboxes();
    for(var i = 0; i < all_checkboxes.length; i++){
      all_checkboxes[i].checked = choice;
    }
  }

// method for onclick event 
  this.events = function(){
    var form = document.getElementById(this.form_id);
    var checkall_link = form.getElementsByClassName("checkall")[0];
    var checknone_link = form.getElementsByClassName("checknone")[0];
    var value = this;
    checkall_link.onclick = function(){ value.checkAll(); }
    checknone_link.onclick = function(){ value.uncheckAll(); }
  }
}

var form1 = new Form("form1");
form1.events();