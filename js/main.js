// variables slider
var slider = document.getElementById('SliderWaterLevel');
var image = document.getElementById('WaterFloodMap');
var stijgingWater = document.getElementById('StijgingWater');

//variables json


//functionality of slider
function adjustWaterLevel(){
    sliderValue = slider.value;
    console.log(sliderValue)

    switch (sliderValue){
        case '0':
            image.src = "../img/Maps/europe.png"
            stijgingWater.innerHTML = "Stijging: 0 meter"
            break;
        case '1':
            image.src = "../img/Maps/5Meuropa.png"
            stijgingWater.innerHTML = "Stijging: 5 meter"
            break;
        case '2':
            image.src = "../img/Maps/15Meuropa.png"
            stijgingWater.innerHTML = "Stijging: 15 meter"
            break;
        case '3':
            image.src = "../img/Maps/25Meuropa.png"
            stijgingWater.innerHTML = "Stijging: 25 meter"
            break;
        case '4':
            image.src = "../img/Maps/50Meuropa.png"
            stijgingWater.innerHTML = "Stijging: 50 meter"
            break;
        case '5':
            image.src = "../img/Maps/100Meuropa.png"
            stijgingWater.innerHTML = "Stijging: 100 meter"
            break;
    }
}

adjustWaterLevel();

slider.addEventListener('input', adjustWaterLevel)



// functionality of json weetjes

// Assuming you have a JSON file named data.json in the same directory


