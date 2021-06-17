$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 550); //Aplica a cor do nav ao fazer o scroll em um tempo determinado de 550 mls
});

function writeCookie(name, value, days) {
  var date, expires;
  if (days) {
    date = new Date(2999, 11, 30);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

const clientIP = (_AnimationEffect) => {
  var dadosIP;
  $.get("https://www.cloudflare.com/cdn-cgi/trace", function (data) {
    data = data
      .trim()
      .split("\n")
      .reduce(function (obj, pair) {
        pair = pair.split("=");
        return (obj[pair[0]] = pair[1]), obj;
      }, {});

    dadosIP = data["ip"];
    writeCookie("ClienteIP", dadosIP, true);
  });
};
