document.addEventListener("DOMContentLoaded", function() {
  var svgElements = document.querySelectorAll(".svg-overlay circle");
  var popup = document.getElementById("popup");
  var belgië = document.getElementById("België");
  var belgiëText = document.getElementById("BelgiëText");
  var frankrijk = document.getElementById("Frankrijk");
  var frankrijkText = document.getElementById("FrankrijkText");
  var nederland = document.getElementById("Nederland");
  var nederlandText = document.getElementById("NederlandText");

  belgië.addEventListener("mouseover", function(event) {
    belgiëText.style.visibility = "visible"; // Show text on hover
  });

  belgië.addEventListener("mouseout", function(event) {
    belgiëText.style.visibility = "hidden"; // Hide text when mouse leaves
  });

  frankrijk.addEventListener("mouseover", function(event) {
    frankrijkText.style.visibility = "visible"; // Show text on hover
  });

  frankrijk.addEventListener("mouseout", function(event) {
    frankrijkText.style.visibility = "hidden"; // Hide text when mouse leaves
  });

  nederland.addEventListener("mouseover", function(event) {
    nederlandText.style.visibility = "visible"; // Show text on hover
  });

  nederland.addEventListener("mouseout", function(event) {
    nederlandText.style.visibility = "hidden"; // Hide text when mouse leaves
  });

  svgElements.forEach(function(element) {
    element.addEventListener("click", function(event) {
      var x = event.clientX;
      var y = event.clientY;
      popup.style.left = x-800 + "px";
      popup.style.top = y-200 + "px";
      popup.textContent = "Info over " + event.target.id + ":";
      popup.style.display = "block";
    });
  });


  document.addEventListener("click", function(event) {
    if (!event.target.closest(".svg-overlay")) {
      popup.style.display = "none";
    }
  });

  document.getElementById("WaterFloodMap").addEventListener("click", function(event) {
    popup.style.display = "none";
  });

});
