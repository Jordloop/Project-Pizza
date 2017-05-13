
$(document).ready(function() {
  $("form.user-form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#pizzaSize").val();
    var toppingsArray = []
    $("input:checkbox[name=topping]:checked").each(function() {
      var thisTopping = $(this).val();
      toppingsArray.push(thisTopping);
    }); // checkbox.each function
  }); // submit button
}); // Doc ready
