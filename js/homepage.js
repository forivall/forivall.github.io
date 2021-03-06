(function() {
  var noop = function() {};
  var store = typeof localStorage !== "undefined" ? localStorage : {setItem: noop, getItem: noop};

  function onReady() {
    var elHour = document.getElementById("hour");
    var elMinute = document.getElementById("minute");
    var elSecond = document.getElementById("second");

    var transformProp =
      "transform" in document.body.style ? "transform" :
      "WebkitTransform" in document.body.style ? "WebkitTransform" :
      "MozTransform" in document.body.style ? "MozTransform" :
      "OTransform" in document.body.style ? "OTransform" :
      false;

    if (transformProp) {
      var
        now = new Date(),
        second = now.getSeconds() * 6,
        minute = now.getMinutes() * 6 + (second / 60),
        hour = ((now.getHours() % 12) / 12) * 360 + (minute / 12);
      elHour.style[transformProp] = "rotate(" + hour + "deg)";
      elMinute.style[transformProp] = "rotate(" + minute + "deg)";
      elSecond.style[transformProp] = "rotate(" + second + "deg)";
    } else {
      document.getElementsByClassname("below-the-fold")[0].style.display = "none";
    }

    if (store.getItem("forivallInvert") === "add") {
      document.body.classList.add("noanimate");
      document.body.classList.add("invert");
      setTimeout(function() {
        document.body.classList.remove("noanimate");
      }, 10);
    }

    document.getElementById("clock").addEventListener("click", function() {

      var action = document.body.classList.contains("invert") ? "remove" : "add";
      document.body.classList[action]("invert");
      store.setItem("forivallInvert", action);
    });
  }

  if (document.readyState === "interactive") {
    onReady();
  } else {
    document.addEventListener("DOMContentLoaded", onReady);
  }
})()
