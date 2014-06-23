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
    RestaurantApp.Menu.bindEvents();
    RestaurantApp.Order.bindEvents();
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
    RestaurantApp.Order.currentOrder = null;
    $("#current-order-container .total-price").text(0);
  }
}

RestaurantApp.Menu = {
  bindEvents : function() {
    $("#menu-container ul").on('click', 'li', function() {
      // get menu item name
      var menuItem = $(this).find(".item-name").text();

      var order = RestaurantApp.Order.currentOrder || new Order();

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

var Menu = {
  setup : function() {
    var menuItems = Object.keys(RestaurantApp.seedData);
    for(var i = 0; i < menuItems.length; i++) {
      var html = "";
      if($("#" + RestaurantApp.seedData[menuItems[i]]["type"]).length) {
        html += "<p class='item-name'>" + menuItems[i] + "</p>";
        html += "<p class='quantity'>" + RestaurantApp.seedData[menuItems[i]]["price"] + "</p>";
        html += "<p class='price'>" + RestaurantApp.seedData[menuItems[i]]["quantity"] + "</p>";
        $("<li>").html(html).appendTo("#" + RestaurantApp.seedData[menuItems[i]]["type"]);        
      } else {
        var $newItem = $("<ul>", { id : RestaurantApp.seedData[menuItems[i]]["type"]}).appendTo("#menu-container");
        html += "<p class='item-name'>" + menuItems[i] + "</p>";
        html += "<p class='quantity'>" + RestaurantApp.seedData[menuItems[i]]["price"] + "</p>";
        html += "<p class='price'>" + RestaurantApp.seedData[menuItems[i]]["quantity"] + "</p>";
        $("<li>").html(html).appendTo($newItem);
      }
    }
  }
}

RestaurantApp.Order = {
  currentOrder: null,
  placedOrders: [],

  bindEvents : function() {
    $("#place-order").on('click', function() {
      var order = RestaurantApp.Order.currentOrder;
      order.placeOrder();
      RestaurantApp.Order.displayPlacedOrders(); 
      RestaurantApp.Order.totalSales();
      RestaurantApp.reset();
    });
  },

  totalSales : function(){
    var total = 0;
    for(var i=0; i < this.placedOrders.length; i++) {
      total += this.placedOrders[i]["price"];
    }
    $("#total-sales").text(total);
  },

  displayPlacedOrders : function() {
  $("#placed-order-container div").html('')
  for(var i = 0; i < RestaurantApp.Order.placedOrders.length; i++) {
    $div = $("<div>");
    $("<h4>").text(RestaurantApp.Order.placedOrders[i]["name"]).appendTo($div);
    $div.append(RestaurantApp.Order.placedOrders[i].buildHTML());
    $div.appendTo("#placed-order-container");
  } 
}
}

function Order() {
  this.menuItems = [];
  this.current = true;
  RestaurantApp.Order.currentOrder = this;
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
  RestaurantApp.Order.currentOrder = null;
  RestaurantApp.Order.placedOrders.push(this);
  this.current = false;
}

Order.prototype.totalPrice = function(){
  this.price = 0;
  for(i = 0; i < this.menuItems.length; i++) {
    this.price += RestaurantApp.seedData[this.menuItems[i]]["price"];
  }  return this.price;
}

$(function() {
  RestaurantApp.init();
})