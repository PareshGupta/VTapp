function Form() {
  this.form = document.getElementById('form');
  this.number = document.getElementById('number');
  this.result = document.getElementById('result');
  
  // method to validate number entered
  this.validateNumberField = function() { 
    var valid = true;
    var pattern = /\d+/;
    if (!pattern.test(this.number.value)) {
      result.value = false;
      valid = false;
    } else {
      result.value = true;
    }
    return valid;
  }
  
  // method to submit form
  this.submitEvent = function() {
    var that = this;
    this.form.onsubmit = function() {
      return that.validateNumberField();
    }
  }
}

var form = new Form();
form.submitEvent();