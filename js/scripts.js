// Biz Logic-------------------------

 // DECLARE GLOBAL VARIABLES
var pizzaSize
var toppingsArray = [];

 //PIZZA CONSTRUCTOR
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
};

 // CALCULATES TOTAL PRICE OF A PIZZA
Pizza.prototype.orderTotal = function() {
  if (this.toppings.length <= 1) {
    return this.size
  } else if (this.toppings.length > 1) {
    return this.size + (this.toppings.length - 1);
  } else {
    console.log("error in pizza.orderTotal");
  }
} //Pizza.orderTotal

// UI Logic-------------------------
$(document).ready(function() {
  $("form.user-form").submit(function(event) {
    event.preventDefault();
    $("#receipt").show();

    // COLLECTS INPUT
    pizzaSize = parseInt($("#pizzaSize").val());
    $("input:checkbox[name=topping]:checked").each(function() {
      var thisTopping = $(this).val();
      toppingsArray.push(thisTopping);
    }); // checkbox.each function

    // INITALIZES PIZZA CONSTRUCTOR
    pizzaOrder = new Pizza(pizzaSize, toppingsArray);
    pizzaOrder.price =  pizzaOrder.orderTotal();
    // CLEARS ALL ELEMENTS IN TOPPING PROPERTY
    pizzaOrder.toppings.splice(0);

    $("#total-price").text(pizzaOrder.price);
  }); // submit button
}); // Doc ready
