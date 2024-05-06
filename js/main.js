// variables slider
let slider = document.getElementById('SliderWaterLevel');
let slider1 = document.getElementById('SliderJaarGepasseerd');
let image = document.getElementById('WaterFloodMap');
let image1 = document.getElementById('TemperatureMap');
let stijgingWater = document.getElementById('StijgingWater');
let JaarGepasseerd = document.getElementById('JaarGepasseerd');
let oppervlakte = document.getElementById("oppervlakte")
let temperature = document.getElementById("temperature")
let navMap = document.getElementById("select-map");
let navCountries = document.getElementById("select-countries");
let navEurope = document.getElementById("select-europe");
let imgGraphMap = document.getElementById("TemperatureMap")
let additionalInfo = document.getElementById("additional-info")

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

  navMap.classList.add('active');
  navCountries.classList.remove('active');
  navEurope.classList.remove('active');
  
  switch (slider1Value){
    case '0':
      image1.src = "../img/Maps/europe-temperature-colors.png"
      JaarGepasseerd.innerHTML = "Average temperature in 2019"
      temperature.innerHTML = ""
      additionalInfo.classList.add("Hidden")
      additionalInfo.classList.remove("Visible")
      break;
    case '1':
      image1.src = "../img/Maps/europe-1-colors.png"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 1 Year"
      temperature.innerHTML = "Total increase of average temperature in Europa: 0,02°C"
      additionalInfo.classList.add("Visible")
      break;
    case '2':
      image1.src = "../img/Maps/europe-10-colors.png"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 10 Years"
      temperature.innerHTML = "Total increase of average temperature in Europa: 0,20°C"
      additionalInfo.classList.add("Visible")
      break;
    case '3':
      image1.src = "../img/Maps/europe-50-colors.png"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 50 Years"
      temperature.innerHTML = "Total increase of average temperature in Europa: 1,02°C"
      additionalInfo.classList.add("Visible")
      break;
    case '4':
      image1.src = "../img/Maps/europe-100-colors.png"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 100 Years"
      temperature.innerHTML = "Total increase of average temperature in Europa: 2,05°C"
      additionalInfo.classList.add("Visible")
      break;
    case '5':
      image1.src = "../img/Maps/europe-200-colors.png"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 200 Years"
      temperature.innerHTML = "Total increase of average temperature in Europa: 4,09°C"
      additionalInfo.classList.add("Visible")
      break;
    case '6':
      image1.src = "../img/Maps/europe-500-colors.png"
      JaarGepasseerd.innerHTML = "Years passed after 2019: 500 Years"
      temperature.innerHTML = "Total increase of average temperature in Europa: 10,23°C"
      additionalInfo.classList.add("Visible")
      break;
  }
}

adjustWaterLevel();
adjustYearsPassed();

slider.addEventListener('input', adjustWaterLevel);
slider1.addEventListener('input', adjustYearsPassed);



//functionality of graph/map selector

function selectTemperatureMap(){
  navMap.classList.add('active');
  navCountries.classList.remove('active');
  navEurope.classList.remove('active');
  imgGraphMap.src="../img/Maps/europe.png";

  adjustYearsPassed();
}

function selectGraphCountries(){
  navMap.classList.remove('active');
  navCountries.classList.add('active');
  navEurope.classList.remove('active');
  imgGraphMap.src="../img/Graphs/Graph_Temperature_Every_Country.png"
}

function selectGraphEurope(){
  navMap.classList.remove('active');
  navCountries.classList.remove('active');
  navEurope.classList.add('active');
  imgGraphMap.src="../img/Graphs/Cummulative_Temperature_Rise_Europe.png"
}