// class Prompt for new url
var Prompt = function() {  
  this.url = prompt("Enter the url: ", "http://www.google.com");
  urlValidator.validateOrOpenUrl(this.url);
}

// object for validating url 
var urlValidator = {
  pattern : /(http(s?)\:\/\/){1}(w{3}\.)?([\w]+)\.\w{2,6}/,
  
  validateOrOpenUrl : function(choice) {  
    if (!this.pattern.test(choice)) {
      alert("Invalid url entered!! Kindly enter it again !!");
      return new Prompt();
    } else {
      window.open(choice, "_blank", "width=400, height=450, menubar=0, scrollbars=0, status=0");
    } 
  }
}

window.onload = function() { new Prompt(); };
