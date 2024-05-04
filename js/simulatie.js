// website elementen
let land = document.getElementById("land");
let onderwater = document.getElementById("onderwater");
let auto = document.getElementById("auto");
let woonplaats = document.getElementById("woonplaats");
let hoogte = document.getElementById("hoogte");
let button = document.getElementById("button");
let resultaat = document.getElementById("resultaat");

// button action
button.addEventListener("click", function() {
  // ingegeven waardes
  let landInhoud = land.options[land.selectedIndex].value;
  let onderwaterInhoud = parseFloat(onderwater.value);
  let autoInhoud = parseFloat(auto.value);
  let woonplaatsInhoud = woonplaats.options[woonplaats.selectedIndex].value;
  let hoogteInhoud = parseFloat(hoogte.value);
  let resultaatTekst;

  // extra var's
  let kosten = 0;
  let multiplier = 1;

  // berekening schadekosten auto
  if (onderwaterInhoud >= 1 && onderwaterInhoud < 2) {
    kosten += autoInhoud * 10000;
  } else if (onderwaterInhoud >= 2) {
    kosten += autoInhoud * 20000;
  }

  // berekening schadekosten woonplaats
  if (onderwaterInhoud >= 1 && onderwaterInhoud < 5) {
    if (woonplaatsInhoud === "1") {    //Huis
      kosten += 112500;
    } else if (woonplaatsInhoud === "2" && onderwaterInhoud + hoogteInhoud >= 1 && onderwaterInhoud + hoogteInhoud <= 5) {    //Appartement
      kosten += 132500;
    }
  } else if (onderwaterInhoud >= 5) {
    if (woonplaatsInhoud === "1") {    //Huis
      kosten += 250000;
    } else if (woonplaatsInhoud === "2" && onderwaterInhoud + hoogteInhoud >= 5) {    //Appartement
      kosten += 275000;
    }
  }

  // multiplier toekennen
  if (landInhoud === "1") {   //België
    multiplier = 1.5;
  } else if (landInhoud === "2") {    //Zwitserland
    multiplier = 1.1;
  } else if (landInhoud === "3") {    //Verenigd Koninkrijk
    multiplier = 1.2;
  }

  // eindberekening
  kosten *= multiplier;
  resultaat.style.display = "block"
  resultaatTekst = "Rough estimate of the damages to your property: €" + Math.round(kosten, 2);

  // het resultaat tonen
  resultaat.innerHTML = resultaatTekst;
});

