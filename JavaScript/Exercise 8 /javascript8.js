var Prompt = function(){  
  this.windowOnload();
}

Prompt.prototype.windowOnload = function() {
  var url = " ";
  while(url === '' || isNaN(url) == false) {
    url = prompt("Enter the url: " , "http://www.google.com");
    if(url === '' || isNaN(url) == false) {
      alert("No url entered!! Kindly enter it again !!");
    }
    else {
      window.open(url,"_blank","width=400,height=450,menubar=0,scrollbars=0,status=0");
    }
  }  
}

var window_onload = new Prompt();
