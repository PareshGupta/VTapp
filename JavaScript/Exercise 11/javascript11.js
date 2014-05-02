function Form() {
  this.form = document.getElementById('form');
  this.number = document.getElementById('number');
  this.result = document.getElementById('result');
  var digitRegex = /\d+/;
  
  // method to validate number entered
  this.validateNumberField = function() { 
    var valid = digitRegex.test(this.number.value);
    if (!valid) {
      result.value = false;
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