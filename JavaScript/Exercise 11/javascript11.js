function Form() {
  this.form = document.getElementById('form');
  this.number = document.getElementById('number');
  this.result = document.getElementById('result');
  var digitRegex = /\d+/;
  
  // method to validate number entered
  this.validateNumberField = function() { 
    result.value = digitRegex.test(this.number.value);
    return result.value;
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