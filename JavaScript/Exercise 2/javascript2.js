// creating a class
function Form(form_id) {
  this.form_id = form_id;

  // method for iterate to all checkboxes
  this.checkAllOrNone = function(choice) {
    var checkbox = document.getElementsByName("check");
    for (var i = 0; i < checkbox.length; i++) {
      checkbox[i].checked = choice;
    }
  }

  // method for onclick event 
  this.events = function() {
    var form = document.getElementById(this.form_id);
    var checkall_link = form.getElementsByClassName("checkall")[0];
    var checknone_link = form.getElementsByClassName("checknone")[0];
    var value = this;
    checkall_link.onclick = function() { value.checkAllOrNone(true);}
    checknone_link.onclick = function() { value.checkAllOrNone(false);}
  }
}

var form1 = new Form("form1");
form1.events();