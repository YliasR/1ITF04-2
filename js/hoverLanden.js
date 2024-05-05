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
            popupBelgië.textContent = "Belgium 0m \r\n";
            popupBelgië.textContent += "Surface flooded: 0km²\r\n";
            popupBelgië.textContent += "Percentage underwater: 0%"
            break;
          case '1':
            popupBelgië.textContent = "Belgium 5m \r\n";
            popupBelgië.textContent += "Surface flooded: 2457km²\r\n";
            popupBelgië.textContent += "Percentage underwater: 8.01%"
            break;
          case '2':
            popupBelgië.textContent = "Belgium 15m \r\n";
            popupBelgië.textContent += "Surface flooded: 5758km²\r\n";
            popupBelgië.textContent += "Percentage underwater: 18.76%"
            break;
          case '3':
            popupBelgië.textContent = "Belgium 25m \r\n";
            popupBelgië.textContent += "Surface flooded: 6158km²\r\n";
            popupBelgië.textContent += "Percentage underwater: 20.07%"
            break;
          case '4':
            popupBelgië.textContent = "Belgium 50m \r\n";
            popupBelgië.textContent += "Surface flooded: 11370km²\r\n";
            popupBelgië.textContent += "Percentage underwater: 37.05%"
            break;
          case '5':
            popupBelgië.textContent = "Belgium 100m \r\n";
            popupBelgië.textContent += "Surface flooded: 12954km²\r\n";
            popupBelgië.textContent += "Percentage underwater: 42.21%"
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
            popupNederland.textContent = "Netherlands 0m \r\n";
            popupNederland.textContent += "Surface flooded: 0km²\r\n";
            popupNederland.textContent += "Percentage underwater: 0%"
            break;
          case '1':
            popupNederland.textContent = "Netherlands 5m \r\n";
            popupNederland.textContent += "Surface flooded: 26099km²\r\n";
            popupNederland.textContent += "Percentage underwater: 62.82%"
            break;
          case '2':
            popupNederland.textContent = "Netherlands 15m \r\n";
            popupNederland.textContent += "Surface flooded: 31380km²\r\n";
            popupNederland.textContent += "Percentage underwater: 75.54%"
            break;
          case '3':
            popupNederland.textContent = "Netherlands 25m \r\n";
            popupNederland.textContent += "Surface flooded: 32380km²\r\n";
            popupNederland.textContent += "Percentage underwater: 77.94%"
            break;
          case '4':
            popupNederland.textContent = "Netherlands 50m \r\n";
            popupNederland.textContent += "Surface flooded: 39900km²\r\n";
            popupNederland.textContent += "Percentage underwater: 96.05%"
            break;
          case '5':
            popupNederland.textContent = "Netherlands 100m \r\n";
            popupNederland.textContent += "Surface flooded: 41500km²\r\n";
            popupNederland.textContent += "Percentage underwater: 99.89%"
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
            popupFrankrijk.textContent = "France 0m \r\n";
            popupFrankrijk.textContent += "Surface flooded: 0km²\r\n";
            popupFrankrijk.textContent += "Percentage underwater: 0%"
            break;
          case '1':
            popupFrankrijk.textContent = "France 5m \r\n";
            popupFrankrijk.textContent += "Surface flooded: 1863km²\r\n";
            popupFrankrijk.textContent += "Percentage underwater: 0.34%"
            break;
          case '2':
            popupFrankrijk.textContent = "France 15m \r\n";
            popupFrankrijk.textContent += "Surface flooded: 2941km²\r\n";
            popupFrankrijk.textContent += "Percentage underwater: 0.54%"
            break;
          case '3':
            popupFrankrijk.textContent = "France 25m \r\n";
            popupFrankrijk.textContent += "Surface flooded: 5709km²\r\n";
            popupFrankrijk.textContent += "Percentage underwater: 1.04%"
            break;
          case '4':
            popupFrankrijk.textContent = "France 50m \r\n";
            popupFrankrijk.textContent += "Surface flooded: 32300km²\r\n";
            popupFrankrijk.textContent += "Percentage underwater: 5.90%"
            break;
          case '5':
            popupFrankrijk.textContent = "France 100m \r\n";
            popupFrankrijk.textContent += "Surface flooded: 91580km²\r\n";
            popupFrankrijk.textContent += "Percentage underwater: 16.74%"
            break;
        }
        popupFrankrijk.style.left = x-800 + "px";
        popupFrankrijk.style.top = y-200 + "px";
        popupFrankrijk.style.display = "block";
      }
    });
  });

  document.addEventListener("click", function(event) {
    if (!event.target.closest(".svg-overlay #België")) {
      popupBelgië.style.display = "none";
    }
  });
  document.addEventListener("click", function(event) {
    if (!event.target.closest(".svg-overlay #Nederland")) {
      popupNederland.style.display = "none";
    }
  });
  document.addEventListener("click", function(event) {
    if (!event.target.closest(".svg-overlay #Frankrijk")) {
      popupFrankrijk.style.display = "none";
    }
  });

});
