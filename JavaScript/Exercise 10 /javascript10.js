function Form(form_id) {
  this.form = document.getElementById(form_id);
  this.textFields = document.getElementsByClassName('textfields');
  this.textarea = document.getElementById('textbox');
  this.checkbox = document.getElementById('checkbox');  

  // method to validate Textfields
  this.validateTextFields = function() {
    var valid = true;
    for (i = 0; i < this.textFields.length; i++) {
      if (this.textFields[i].value === '') {
        alert(this.textFields[i].name + " can not be empty");
        this.textFields[i].focus();
        valid = false;
        break;
      }
    }
    return valid;
  }

  //  method to validate url
  this.validateUrl = function() {
    var valid = true;
    var url = document.getElementsByName("Home_Page")[0];
    var pattern = /(http(s?)\:\/\/)(w{3}\.)?([\w]+)+\.(\w{2,6}$)/;
    if (!pattern.test(url.value)) {
      alert("Invalid Url Entered \n \t Enter Again");
      url.focus();
      valid = false;
    } 
    return valid;
  }

  // method to validate email id
  this.validEmailId = function() {
    var valid = true;
    var email = document.getElementsByName("Email_Id")[0];
    var pattern = /((\w+)(\.?))+@(\w+)\.(\w{2,6}$)/;
    if (!pattern.test(email.value)) {
      alert("Invalid Email Entered \n \t Enter Again");
      email.focus();
      valid = false;
    }
    return valid;
  }

  // method to validate Textarea
  this.validateTextArea = function() {
    var valid = true;
    if (this.textarea.value.length < 50) {
      alert("Minimum length of this box is 50");
      this.textarea.focus();
      valid = false;
    }
    return valid;
  }

  // method to validate checkbox
  this.validateCheckBox = function() {
    var valid = true;
    if (!this.checkbox.checked) {
      alert(this.checkbox.name + " must be checked ");
      this.checkbox.focus();
      valid = false;
    }
    return valid;
  }  

  // method to validate form
  this.validateForm = function() {
    var valid = this.validateTextFields() && this.validEmailId()  && this.validateUrl() && this.validateTextArea() && this.validateCheckBox(); 
    return valid;
  }

  // method for onclick event
  this.event = function() {
    var that = this;
    this.form.onsubmit = function() { 
      return that.validateForm();
    };
  }
}

var registration_form = new Form("registration_form");
registration_form.event();