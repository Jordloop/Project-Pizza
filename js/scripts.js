// Biz Logic
var pizzaSize
var toppingsArray
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

// UI Logic
$(document).ready(function() {
  $("form.user-form").submit(function(event) {
    event.preventDefault();
    debugger;
    pizzaSize = $("#pizzaSize").val();
    toppingsArray = []
    $("input:checkbox[name=topping]:checked").each(function() {
      var thisTopping = $(this).val();
      toppingsArray.push(thisTopping);
    }); // checkbox.each function
    pizzaOrder = new Pizza(pizzaSize, toppingsArray);
  }); // submit button
}); // Doc ready
