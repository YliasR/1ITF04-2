var slider = document.getElementById('SliderWaterLevel');
var image = document.getElementById('WaterFloodMap')

function adjustWaterLevel(){
    sliderValue = slider.value;

    switch (sliderValue){
        case '0':
            image.src = "../img/placeholders/placeholder1"
    }
}

adjustWaterLevel();

slider.addEventListener('input', adjustWaterLevel)