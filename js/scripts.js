$(document).ready(function() {
  $("form.user-form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#pizzaSize").val();
    console.log(pizzaSize);

  });
});
