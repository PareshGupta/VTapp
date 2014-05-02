var Form = function() {
  this.form = document.getElementById("form");
  var pattern = /(http[s]?\:\/\/)?(w{3}.)?([\w]*)?(\.)([\w]+\.[a-z.]{2,6})(\/)?([\w]+\/?)*$/;
  var url = document.getElementById('url');

// method to validate the url 
  this.validator = function() {  
    var valid = pattern.test(url.value);
    if (!valid) {
      alert("wrong url entered");
      url.focus();
    } else {
      this.displayDomainAndSubDomain();
    }
    return valid;
  }

// method to display the domain and subdomain
  this.displayDomainAndSubDomain = function() {
    var hostname = (url.value.match(pattern));
    alert("Domain: " + hostname[5]);
    alert("Sub Domain: " + hostname[3]);
  }

// event method
  this.event = function() {
    var that = this;
    this.form.onsubmit = function() {
      return that.validator();
    };
  }
}

var url = new Form();
url.event();
