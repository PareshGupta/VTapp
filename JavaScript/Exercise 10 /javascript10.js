function Form(form_id) {
  this.form = document.getElementById(form_id);
  this.textFields = document.getElementsByClassName("data");
  this.textarea = document.getElementById("message");
  this.checkbox = document.getElementById("check");
  var urlRegex = /(http(s?)\:\/\/)(w{3}\.)?([\w]+)+\.(\w{2,6}$)/;
  var emailRegex = /((\w+)(\.?))+@(\w+)\.(\w{2,6}$)/;

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
    var url = document.getElementById("web_address");
    var valid = urlRegex.test(url.value);
    if (!valid) {
      alert("Invalid Url Entered \n \t Enter Again");
      url.focus();
    } 
    return valid;
  }

  // method to validate email id
  this.validEmailId = function() {
    var email = document.getElementById("userId");  
    var valid = emailRegex.test(email.value);
    if (!valid) {
      alert("Invalid Email Entered \n \t Enter Again");
      email.focus();
    }
    return valid;
  }

  // method to validate Textarea
  this.validateTextArea = function() {
    var valid = !(this.textarea.value.length < 50);
    if (!valid) {
      alert("Minimum length of this box is 50");
      this.textarea.focus();
    }
    return valid;
  }

  // method to validate checkbox
  this.validateCheckBox = function() {
    var valid = this.checkbox.checked;
    if (!valid) {
      alert(this.checkbox.name + " must be checked ");
      this.checkbox.focus();
    }
    return valid;
  }  

  // method to validate form
  this.validateForm = function() {
    var valid = this.validateTextFields() && this.validEmailId() && this.validateUrl() &&  this.validateTextArea() && this.validateCheckBox(); 
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
