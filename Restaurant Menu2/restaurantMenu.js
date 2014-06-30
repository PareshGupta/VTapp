var RestaurantApp = {
  seedData : [],

  init : function() {
    $.getJSON("data.json")
      .done(function(data) {
        RestaurantApp.seedData = data;
        RestaurantApp.setup();
      })
      .fail(function() {
        alert("Not able to load JSON");
      });
  },

  setup : function() {
    Menu.setup();
    this.bindEvents();
  },

  bindEvents : function() {
    Menu.bindEvents();
    Order.bindEvents();
    this.bindEventOnResetButton();
  },

  bindEventOnResetButton : function() {
    $("#reset").on('click', function() {
      RestaurantApp.reset();
    });
  },

  reset : function() {
    $("#menu-container li").removeClass("highlight");
    $("#current-order-container table, #current-order-container p").remove();
    Order.currentOrder = null;
    $("#current-order-container .total-price").text(0);
  }
}

var Menu = {
  setup : function() {
    var menuItems = Object.keys(RestaurantApp.seedData);
    for(var i = 0; i < menuItems.length; i++) {
      if($("#" + RestaurantApp.seedData[menuItems[i]]["type"]).length) {
        $("#" + RestaurantApp.seedData[menuItems[i]]["type"]).append(this.buildHTML(menuItems[i]));        
      } else {
        var $newItem = $("<ul>", { id : RestaurantApp.seedData[menuItems[i]]["type"]}).appendTo("#menu-container");
        $newItem.append(this.buildHTML(menuItems[i]));
      }
    }
  },

  buildHTML : function(menuItem) {
  	var html = "";
 		html += "<p class='item-name'>" + menuItem + "</p>";
    html += "<p class='quantity'>" + RestaurantApp.seedData[menuItem]["price"] + "</p>";
    html += "<p class='price'>" + RestaurantApp.seedData[menuItem]["quantity"] + "</p>";
    return $("<li>").html(html);
  },

  bindEvents : function() {
    $("#menu-container ul").on('click', 'li', function() {
      // get menu item name
      var menuItem = $(this).find(".item-name").text();

      var order = Order.currentOrder || new Order();

      if(!$(this).hasClass("highlight")) {
        order.addMenuItem(menuItem);
      } else {
        order.removeMenuItem(menuItem);
      }
      $("#current-order-container h4").after(order.buildHTML());
      
      // highlight the menu-item
      $(this).toggleClass("highlight");
      $(this).siblings().removeClass("highlight");

    });
  }
}


function Order() {
  this.menuItems = [];
  this.current = true;
  Order.currentOrder = this;
}

Order.prototype.addMenuItem = function(menuItem) {
  if(this.menuItems.length) {
    for(var i = 0; i < this.menuItems.length; i++) {
      if(RestaurantApp.seedData[menuItem]["type"] == RestaurantApp.seedData[this.menuItems[i]]["type"]) {
        this.removeMenuItem(this.menuItems[i]);
      }
    }
  }
  this.menuItems.push(menuItem);
}

Order.prototype.removeMenuItem = function(menuItem) {
  var index = this.menuItems.indexOf(menuItem);
  this.menuItems.splice(index, 1);
}

Order.prototype.buildHTML = function() {
  $("#current-order-container table, #current-order-container p").remove();
  var html = "";
  html += "<table><tr><th>Items</th><th>Price</th></tr>";
  for(var i = 0; i < this.menuItems.length; i++) {
    html += "<tr><td>" + this.menuItems[i] + "</td><td>Rs " + RestaurantApp.seedData[this.menuItems[i]]["price"] +"/-</td></tr>";
  }
  html += "</table>";
  html += "<p>Total Price: Rs <span class='total-price'>" + this.totalPrice() + "</span>/-</p>";
  return html;
}

Order.prototype.placeOrder = function() {
  this.name = prompt("Please Enter your name to place an order");
  Order.currentOrder = null;
  Order.placedOrders.push(this);
  this.current = false;
}

Order.prototype.totalPrice = function(){
  this.price = 0;
  for(i = 0; i < this.menuItems.length; i++) {
    this.price += RestaurantApp.seedData[this.menuItems[i]]["price"];
  }  return this.price;
}

Order.currentOrder = null;
Order.placedOrders = [];

Order.bindEvents = function() {
  $("#place-order").on('click', function() {
    var order = Order.currentOrder;
    order.placeOrder();
    Order.displayPlacedOrders(); 
    Order.totalSales();
    RestaurantApp.reset();
  });
}

Order.totalSales = function(){
  var total = 0;
  for(var i=0; i < this.placedOrders.length; i++) {
    total += this.placedOrders[i]["price"];
  }
  $("#total-sales").text(total);
}

Order.displayPlacedOrders = function() {
	$("#placed-order-container div").html('')
  for(var i = 0; i < Order.placedOrders.length; i++) {
    $div = $("<div>");
    $("<h4>").text(Order.placedOrders[i]["name"]).appendTo($div);
    $div.append(Order.placedOrders[i].buildHTML());
    $div.appendTo("#placed-order-container");
  }
}

$(function() {
  RestaurantApp.init();
})