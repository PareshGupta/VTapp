function Form(form_id)
{
  this.form = document.getElementById(form_id);
  this.textFields = document.getElementsByClassName('textfields');
  this.textarea = document.getElementById('textbox');
  this.checkbox = document.getElementById('checkbox');  
  this.valid = true;

  // method to validate Textfields
  this.validateTextFields = function() {
    for(i = 0; i < this.textFields.length; i++) {
      if (this.textFields[i].value === '') {
        alert(this.textFields[i].name + " can not be empty");
        this.textFields[i].focus();
        this.valid = false;
        break;
      }
    }
  }

  // method to validate Textarea
  this.validateTextArea = function() {
    if(this.textarea.value.length < 50) {
      alert("Minimum length of this box is 50");
      this.textarea.focus();
      this.valid = false;
    }
  }

  // method to validate checkbox
  this.validateCheckBox = function() {
    if(this.checkbox.checked === false) {
      alert(this.checkbox.name + " must be checked ");
      this.checkbox.focus();
      this.valid = false;
    }
  }  

  // method to validate form
  this.validateForm = function() {
    this.valid = true;
    this.validateTextFields(); 
    if(this.valid){
      this.validateTextArea();
    }
    if(this.valid){
      this.validateCheckBox();
    }
    if(this.valid){
      this.form.submit();
      alert("form submitted");
    }
  }

  // method for onclick event
  this.event = function() {
    var submit = document.getElementById('go');
    var that = this;
    submit.onclick = function() { that.validateForm(); };
  }
}

var registration_form = new Form("registration_form");
registration_form.event();