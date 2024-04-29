// variables slider
let slider = document.getElementById('SliderWaterLevel');
let slider1 = document.getElementById('SliderJaarGepasseerd');
let image = document.getElementById('WaterFloodMap');
let image1 = document.getElementById('TemperatureMap');
let stijgingWater = document.getElementById('StijgingWater');
let JaarGepasseerd = document.getElementById('JaarGepasseerd');
let oppervlakte = document.getElementById("oppervlakte")
let temperature = document.getElementById("temperature")

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
      image1.src = "../img/filler-map.webp"
      JaarGepasseerd.innerHTML = "Temperature in 2019"
      temperature.innerHTML = ""
      break;
    case '1':
      image1.src = "../img/filler-map.webp"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 1 Year"
      temperature.innerHTML = "Total increase of temperature in Europa: 0,020458°C"
      break;
    case '2':
      image1.src = "../img/filler-map.webp"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 10 Years"
      temperature.innerHTML = "Total increase of temperature in Europa: 0,204585°C"
      break;
    case '3':
      image1.src = "../img/filler-map.webp"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 50 Years"
      temperature.innerHTML = "Total increase of temperature in Europa: 1,022924°C"
      break;
    case '4':
      image1.src = "../img/filler-map.webp"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 100 Years"
      temperature.innerHTML = "Total increase of temperature in Europa: 2,045848°C"
      break;
    case '5':
      image1.src = "../img/filler-map.webp"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 200 Years"
      temperature.innerHTML = "Total increase of temperature in Europa: 4,091696°C"
      break;
    case '6':
      image1.src = "../img/filler-map.webp"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 500 Years"
      temperature.innerHTML = "Total increase of temperature in Europa: 10,22924°C"
      break;
  }
}

adjustWaterLevel();
adjustYearsPassed();

slider.addEventListener('input', adjustWaterLevel);
slider1.addEventListener('input', adjustYearsPassed);
