document.addEventListener("DOMContentLoaded", function() {
  var svgElements = document.querySelectorAll(".svg-overlay circle");
  var popups = document.querySelectorAll(".popup");
  var popupBelgië = document.getElementById("popupBelgië");
  var popupNederland = document.getElementById('popupNederland');
  var popupFrankrijk = document.getElementById('popupFrankrijk');
  var belgië = document.getElementById("België");
  var belgiëText = document.getElementById("BelgiëText");
  var frankrijk = document.getElementById("Frankrijk");
  var frankrijkText = document.getElementById("FrankrijkText");
  var nederland = document.getElementById("Nederland");
  var nederlandText = document.getElementById("NederlandText");
  var slider = document.getElementById('SliderWaterLevel');

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
      var land = event.target.id;
      if (land == "België"){
        popupBelgië.setAttribute('style', 'white-space: pre;');
        var sliderWaarde = slider.value;
        switch (sliderWaarde){
          case '0':
            popupBelgië.textContent = "België 0m \r\n";
            popupBelgië.textContent += "Oppervlakte onder water: \r\n";
            popupBelgië.textContent += "Schade per km²: "
            break;
          case '1':
            popupBelgië.textContent = "België 5m \r\n";
            popupBelgië.textContent += "Oppervlakte onder water: \r\n";
            popupBelgië.textContent += "Schade per km²: "
            break;
          case '2':
            popupBelgië.textContent = "België 15 \r\n";
            popupBelgië.textContent += "Oppervlakte onder water: \r\n";
            popupBelgië.textContent += "Schade per km²: "
            break;
          case '3':
            popupBelgië.textContent = "België 25m \r\n";
            popupBelgië.textContent += "Oppervlakte onder water: \r\n";
            popupBelgië.textContent += "Schade per km²: "
            break;
          case '4':
            popupBelgië.textContent = "België 50m \r\n";
            popupBelgië.textContent += "Oppervlakte onder water: \r\n";
            popupBelgië.textContent += "Schade per km²: "
            break;
          case '5':
            popupBelgië.textContent = "België 100m \r\n";
            popupBelgië.textContent += "Oppervlakte onder water: \r\n";
            popupBelgië.textContent += "Schade per km²: "
            break;
        }
        popupBelgië.style.left = x-800 + "px";
        popupBelgië.style.top = y-200 + "px";
        popupBelgië.style.display = "block";
      } else if (land == 'Nederland'){
        popupNederland.setAttribute('style', 'white-space: pre;');
        var sliderWaarde = slider.value;
        switch (sliderWaarde){
          case '0':
            popupNederland.textContent = "Nederland 0m \r\n";
            popupNederland.textContent += "Oppervlakte onder water: \r\n";
            popupNederland.textContent += "Schade per km²: "
            break;
          case '1':
            popupNederland.textContent = "Nederland 5m \r\n";
            popupNederland.textContent += "Oppervlakte onder water: \r\n";
            popupNederland.textContent += "Schade per km²: "
            break;
          case '2':
            popupNederland.textContent = "Nederland 15m \r\n";
            popupNederland.textContent += "Oppervlakte onder water: \r\n";
            popupNederland.textContent += "Schade per km²: "
            break;
          case '3':
            popupNederland.textContent = "Nederland 25m \r\n";
            popupNederland.textContent += "Oppervlakte onder water: \r\n";
            popupNederland.textContent += "Schade per km²: "
            break;
          case '4':
            popupNederland.textContent = "Nederland 50m \r\n";
            popupNederland.textContent += "Oppervlakte onder water: \r\n";
            popupNederland.textContent += "Schade per km²: "
            break;
          case '5':
            popupNederland.textContent = "Nederland 100m \r\n";
            popupNederland.textContent += "Oppervlakte onder water: \r\n";
            popupNederland.textContent += "Schade per km²: "
            break;
        }
        popupNederland.style.left = x-800 + "px";
        popupNederland.style.top = y-200 + "px";
        popupNederland.style.display = "block";
      } else if (land == 'Frankrijk') {
        popupFrankrijk.setAttribute('style', 'white-space: pre;');
        var sliderWaarde = slider.value;
        switch (sliderWaarde){
          case '0':
            popupFrankrijk.textContent = "Frankrijk 0m \r\n";
            popupFrankrijk.textContent += "Oppervlakte onder water: \r\n";
            popupFrankrijk.textContent += "Schade per km²: "
            break;
          case '1':
            popupFrankrijk.textContent = "Frankrijk 5m \r\n";
            popupFrankrijk.textContent += "Oppervlakte onder water: \r\n";
            popupFrankrijk.textContent += "Schade per km²: "
            break;
          case '2':
            popupFrankrijk.textContent = "Frankrijk 15m \r\n";
            popupFrankrijk.textContent += "Oppervlakte onder water: \r\n";
            popupFrankrijk.textContent += "Schade per km²: "
            break;
          case '3':
            popupFrankrijk.textContent = "Frankrijk 25m \r\n";
            popupFrankrijk.textContent += "Oppervlakte onder water: \r\n";
            popupFrankrijk.textContent += "Schade per km²: "
            break;
          case '4':
            popupFrankrijk.textContent = "Frankrijk 50m \r\n";
            popupFrankrijk.textContent += "Oppervlakte onder water: \r\n";
            popupFrankrijk.textContent += "Schade per km²: "
            break;
          case '5':
            popupFrankrijk.textContent = "Frankrijk 100m \r\n";
            popupFrankrijk.textContent += "Oppervlakte onder water: \r\n";
            popupFrankrijk.textContent += "Schade per km²: "
            break;
        }
        popupFrankrijk.style.left = x-800 + "px";
        popupFrankrijk.style.top = y-200 + "px";
        popupFrankrijk.style.display = "block";
      }
    });
  });

  document.addEventListener("click", function(event) {
    if (!event.target.closest(".svg-overlay circle")) {
      popupBelgië.style.display = "none";
      popupNederland.style.display = "none";
      popupFrankrijk.style.display = "none";
    }
  });

});
