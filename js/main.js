// variables slider
let slider = document.getElementById('SliderWaterLevel');
let image = document.getElementById('WaterFloodMap');
let stijgingWater = document.getElementById('StijgingWater');
let oppervlakte = document.getElementById("oppervlakte")

//variables json


//functionality of slider
function adjustWaterLevel(){
    sliderValue = slider.value;
    console.log(sliderValue)

    switch (sliderValue){
        case '0':
            image.src = "../img/Maps/europe.png"
            stijgingWater.innerHTML = "Stijging: 0 meter"
            oppervlakte.innerHTML = ""
            break;
        case '1':
            image.src = "../img/Maps/5Meuropa.png"
            stijgingWater.innerHTML = "Stijging: 5 meter"
            oppervlakte.innerHTML = "Totale oppervlakte onder water: 60 749.46 km²"
            break;
        case '2':
            image.src = "../img/Maps/15Meuropa.png"
            stijgingWater.innerHTML = "Stijging: 15 meter"
            oppervlakte.innerHTML = "Totale oppervlakte onder water: 78 981.93 km²"
            break;
        case '3':
            image.src = "../img/Maps/25Meuropa.png"
            stijgingWater.innerHTML = "Stijging: 25 meter"
            oppervlakte.innerHTML = "Totale oppervlakte onder water: 179 539.91 km²"
            break;
        case '4':
            image.src = "../img/Maps/50Meuropa.png"
            stijgingWater.innerHTML = "Stijging: 50 meter"
            oppervlakte.innerHTML = "Totale oppervlakte onder water: 439 333.99 km²"
            break;
        case '5':
            image.src = "../img/Maps/100Meuropa.png"
            stijgingWater.innerHTML = "Stijging: 100 meter"
            oppervlakte.innerHTML = "Totale oppervlakte onder water: 884 911.21 km²"
            break;
    }
}

adjustWaterLevel();

slider.addEventListener('input', adjustWaterLevel);
