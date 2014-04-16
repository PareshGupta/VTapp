function CheckAll(source){
  var x = document.getElementsByTagName("input");
  var y = x.length;
  i=0;
  while(i<y){
    x[i].checked = source;
    i++;
  }
}