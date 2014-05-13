var products = [ {"name" : "1", "url" : "1.jpg", "color" : "Yellow", "brand" : "BRAND A", "sold_out" : "1"},
  {"name" : "2", "url" : "2.jpg", "color" : "Red", "brand" : "BRAND B", "sold_out" : "0"},
  {"name" : "3", "url" : "3.jpg", "color" : "Green", "brand" : "BRAND D", "sold_out" : "0"},
  {"name" : "4", "url" : "4.jpg", "color" : "Red", "brand" : "BRAND A", "sold_out" : "1"},
  {"name" : "5", "url" : "5.jpg", "color" : "Blue", "brand" : "BRAND B", "sold_out" : "0"},
  {"name" : "6", "url" : "6.jpg", "color" : "Green", "brand" : "BRAND C", "sold_out" : "0"},
  {"name" : "7", "url" : "7.jpg", "color" : "Red", "brand" : "BRAND C", "sold_out" : "1"},
  {"name" : "8", "url" : "8.jpg", "color" : "Blue", "brand" : "BRAND D", "sold_out" : "0"},
  {"name" : "9", "url" : "9.jpg", "color" : "Yellow", "brand" : "BRAND A", "sold_out" : "0"},
  {"name" : "10", "url" : "10.jpg", "color" : "Yellow", "brand" : "BRAND B", "sold_out" : "1"},
  {"name" : "11", "url" : "11.jpg", "color" : "Green", "brand" : "BRAND D", "sold_out" : "0"},
  {"name" : "12", "url" : "12.jpg", "color" : "Yellow", "brand" : "BRAND D", "sold_out" : "0"},
  {"name" : "13", "url" : "13.jpg", "color" : "Blue", "brand" : "BRAND A", "sold_out" : "0"},
  {"name" : "14", "url" : "14.jpg", "color" : "Blue", "brand" : "BRAND D", "sold_out" : "0"},
  {"name" : "15", "url" : "15.jpg", "color" : "Green", "brand" : "BRAND B", "sold_out" : "0"},
  {"name" : "16", "url" : "16.jpg", "color" : "Yellow", "brand" : "BRAND B", "sold_out" : "1"},
  {"name" : "17", "url" : "17.jpg", "color" : "Green", "brand" : "BRAND A", "sold_out" : "1"},
  {"name" : "18", "url" : "18.jpg", "color" : "Blue", "brand" : "BRAND D", "sold_out" : "1"},
  {"name" : "19", "url" : "19.jpg", "color" : "Green", "brand" : "BRAND C", "sold_out" : "0"},
  {"name" : "20", "url" : "20.jpg", "color" : "Yellow", "brand" : "BRAND A", "sold_out" : "0"} ]

function ProductSorter(choice) {
  this.product_container = document.getElementById('container');
  this.products = products;
  this.sortCriteria = document.getElementById(choice);
  this.event();
}

ProductSorter.prototype.event = function(choice) {
  var that = this;
  this.sortCriteria.onchange = function() { that.sortProducts(this.value); };
}

ProductSorter.prototype.compare = function(choice) {
  return function(firstElement, secondElement) {
    if (firstElement[choice] > secondElement[choice]) {
      return 1;
    } else if (firstElement[choice] < secondElement[choice]) {
        return -1;
    } else if (firstElement[choice] = secondElement[choice]) {
        return 0;
    }
  }
}

ProductSorter.prototype.sortProducts = function(choice) {
  var that = this;
  this.products.sort(that.compare(choice));
  this.displayProducts();
}

ProductSorter.prototype.displayProducts = function() {
  this.product_container.innerHTML = "";
  for (i = 0; i < this.products.length; i++) {
    var productImage = document.createElement("img");
    this.product_container.appendChild(productImage);
    productImage.setAttribute("src", this.products[i]['url']);
  }
}

var productSorter = new ProductSorter("sortList");