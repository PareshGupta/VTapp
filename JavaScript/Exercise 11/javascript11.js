function Form() {
  this.form = document.getElementById('form');
  this.number = document.getElementById('number');
  this.result = document.getElementById('result');
  var digitRegex = /\d+/;
  
  // method to validate number entered
  this.validateNumberField = function() { 
    valid = digitRegex.test(this.number.value)
    result.value = valid;
    return valid;
  }
  
  // method to submit form
  this.submitEvent = function() {
    var that = this;
    this.form.onsubmit = function() {
      // form submit only when valid is true  
      return that.validateNumberField();
    }
  }
}

var form = new Form();
form.submitEvent();