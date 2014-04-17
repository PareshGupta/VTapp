var x = document.getElementsByTagName("input");
// function for maximum limit
function myfunction() {
  var none_checkbox = document.getElementById("none");
  var total = 0;
  for (var i = 0; i < x.length; i++) {
    if (x[i].checked) {
      total = total + 1;
      none_checkbox.checked=false;

    }
    if (total > 3) {
      alert("You Can Maximum Select 3 Checkboxes");
      x[i].checked = false;
      return false;
    }
  }
}

// function for select none
function NoneSelected(choice) {
  var y = x.length - 1;
  i = 0;
  while (i < y) {
    x[i].checked = choice;
    i++;
  }
}
