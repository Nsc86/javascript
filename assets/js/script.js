$(document).ready(function() {
  //Efecto smooth al hacer click en lista Navbar
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top - 40
      }, 1200, function() {

        window.location.hash = hash;
      });
    }
  });

  //Oculta texto en tarjeta cuando se hace click en la imagen

  $("#c1").click(function() {

    $("#card1").toggle("slow");
  });

  $("#c2").click(function() {

    $("#card2").toggle("slow");
  });

  $("#c3").click(function() {

    $("#card3").toggle("slow");
  });

  $("#c4").click(function() {

    $("#card4").toggle("slow");
  });

});
