$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 550); //Aplica a cor do nav ao fazer o scroll em um tempo determinado de 550 mls
});