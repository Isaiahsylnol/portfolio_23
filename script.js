/* Javascript array of strings*/
var cars = ["Bently", "Porshe", "Ferrari", "Mercedes"];
console.log(cars[0]);

var user = {
  name: "Nolan",
  username: "silverfox",
  password: "torontobaseball",
};

var database = [
  {
    username: "silverfox",
    password: "supersecret",
  },
  {
    username: "Paul",
    password: "Burn",
  },
];

var newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },

  {
    username: "Smith",
    timeline: "This is a test of javascript in web design!",
  },
];

$(document).ready(function () {
  $(".menu-btn").click(function (event) {
    $(".navbar-demo").toggleClass("open-nav");
  });
});

$(document).ready(function () {
  // Test for placeholder support
  $.support.placeholder = (function () {
    var i = document.createElement("input");
    return "placeholder" in i;
  })();

  // Hide labels by default if placeholders are supported
  if ($.support.placeholder) {
    $(".form-label").each(function () {
      $(this).addClass("js-hide-label");
    });

    // Code for adding/removing classes here
    $(".form-group")
      .find("input, textarea")
      .on("keyup blur focus", function (e) {
        // Cache our selectors
        var $this = $(this),
          $label = $this.parent().find("label");

        switch (e.type) {
          case "keyup":
            {
              $label.toggleClass("js-hide-label", $this.val() == "");
            }
            break;
          case "blur":
            {
              if ($this.val() == "") {
                $label.addClass("js-hide-label");
              } else {
                $label
                  .removeClass("js-hide-label")
                  .addClass("js-unhighlight-label");
              }
            }
            break;
          case "focus":
            {
              if ($this.val() !== "") {
                $label.removeClass("js-unhighlight-label");
              }
            }
            break;
          default:
            break;
        }
      });
  }
});
