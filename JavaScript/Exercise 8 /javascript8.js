var Window = function() {  

  this.enterValidURL = function() {
    var url = " ";
    var pattern = /(http|https):\/\/(w{3})\.([\w]+)\.\w{2,6}/;
    do {
      url = prompt("Enter the url: " , "http://www.google.com");
      if (!pattern.test(url)) {
        alert("Invalid url entered!! Kindly enter it again !!");
      }
      else {
        window.open(url , "_blank" , "width=400 , height=450 , menubar=0 , scrollbars=0 , status=0");
      }
    } while (!pattern.test(url));
  }
}

var urlPrompt = new Window();
urlPrompt.enterValidURL();
