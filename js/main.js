// variables slider
let slider = document.getElementById('SliderWaterLevel');
let slider1 = document.getElementById('SliderJaarGepasseerd');
let image = document.getElementById('WaterFloodMap');
let stijgingWater = document.getElementById('StijgingWater');
let JaarGepasseerd = document.getElementById('JaarGepasseerd');
let oppervlakte = document.getElementById("oppervlakte")
let temperature = document.getElementById("oppervlakte")

//variables json


//functionality of slider
function adjustWaterLevel(){
    sliderValue = slider.value;
    console.log(sliderValue)

    switch (sliderValue){
        case '0':
            image.src = "../img/Maps/europe.png"
            stijgingWater.innerHTML = "Increase in water level: 0m"
            oppervlakte.innerHTML = ""
            break;
        case '1':
            image.src = "../img/Maps/5Meuropa.png"
            stijgingWater.innerHTML = "Increase in water level: 5m"
            oppervlakte.innerHTML = "Total surface area under water: 60 749.46 km²"
            break;
        case '2':
            image.src = "../img/Maps/15Meuropa.png"
            stijgingWater.innerHTML = "Increase in water level: 15m"
            oppervlakte.innerHTML = "Total surface area under water: 78 981.93 km²"
            break;
        case '3':
            image.src = "../img/Maps/25Meuropa.png"
            stijgingWater.innerHTML = "Increase in water level: 25m"
            oppervlakte.innerHTML = "Total surface area under water: 179 539.91 km²"
            break;
        case '4':
            image.src = "../img/Maps/50Meuropa.png"
            stijgingWater.innerHTML = "Increase in water level: 50m"
            oppervlakte.innerHTML = "Total surface area under water: 439 333.99 km²"
            break;
        case '5':
            image.src = "../img/Maps/100Meuropa.png"
            stijgingWater.innerHTML = "Increase in water level: 100m"
            oppervlakte.innerHTML = "Total surface area under water: 884 911.21 km²"
            break;
    }
}

function adjustYearsPassed(){
  slider1Value = slider1.value;
  console.log(slider1Value)

  switch (slider1Value){
    case '0':
      image.src = ""
      JaarGepasseerd.innerHTML = "Temperature in 2019"
      oppervlakte.innerHTML = ""
      break;
    case '1':
      image.src = ""
      JaarGepasseerd.innerHTML = "Years passed after 2019: 1 Year"
      oppervlakte.innerHTML = "Total surface area under water: 60 749.46 km²"
      break;
    case '2':
      image.src = ""
      JaarGepasseerd.innerHTML = "Years passed after 2019: 10 Years"
      oppervlakte.innerHTML = "Totale oppervlakte onder water: 78 981.93 km²"
      break;
    case '3':
      image.src = ""
      JaarGepasseerd.innerHTML = "Years passed after 2019: 50 Years"
      oppervlakte.innerHTML = "Totale oppervlakte onder water: 179 539.91 km²"
      break;
    case '4':
      image.src = ""
      JaarGepasseerd.innerHTML = "Years passed after 2019: 100 Years"
      oppervlakte.innerHTML = "Totale oppervlakte onder water: 439 333.99 km²"
      break;
    case '5':
      image.src = ""
      stijgingWater.innerHTML = "Years passed after 2019: 500 Years"
      oppervlakte.innerHTML = "Totale oppervlakte onder water: 884 911.21 km²"
      break;
  }
}

adjustWaterLevel();

slider.addEventListener('input', adjustWaterLevel);
