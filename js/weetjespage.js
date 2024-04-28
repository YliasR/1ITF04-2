//all facts in a list (will be added to database or API later)

const facts = [
    "Land surface air temperature has increased by 1.53°C",
    "Global mean surface temperature has increased by 0.87°C",
    "26% of the Netherlands below surface level",
    "Antarctica is losing ice mass (melting) at an average rate of about 150 billion tons per year since 2002",
    "Greenland is losing about 270 billion tons of mass per year",
    "Changes in weather and climate over the past decade have caused Earth's continents to soak up and store an extra 3.2 trillion tons of water in soils, lakes and underground aquifers, temporarily slowing the rate of sea level rise by about 20 percent",
    "Overall, Earth was about 2.45 degrees Fahrenheit (or about 1.36 degrees Celsius) warmer in 2023 than in the late 19th-century (1850-1900) preindustrial average",
    "Last 10 years are the warmest since the recordings started in 1880",
    "Since the onset of industrial times in the 18th century, human activities have raised atmospheric CO2 by 50%",
    "An estimated 60% of today's methane emissions are the result of human activities",
    "The concentration of methane in the atmosphere has more than doubled over the past 200 years",
    "If all glaciers and ice sheets melted, global sea level would rise by more than 195 feet (60 meters)",
    "The global ocean covers more than 70% of Earth's surface and contains 97% of the planet's water",
    "By 2060, the cost of inaction on climate change is predicted to reach a staggering $44 trillion",
    "With an average elevation of only 30 m above sea level, the Netherlands are one of the lowest-lying countries in the world",
    "Belgium is comparatively low at an average elevation of 181 meters above sea level",
    "Hottest temperature recorded in Brussels in 2019 was 39.7°C"
]

// add facts to webpage

function createFactList(){
    const list = document.getElementById("list-of-facts");
    let counter = 1
    facts.forEach(fact => {
        const listItem = document.createElement("li");
        const listTitle = document.createElement("p");
        const factContent = document.createElement("p")
        listTitle.textContent = ("Fact: #" + counter)
        factContent.textContent = fact;
        list.appendChild(listItem);
        listItem.appendChild(listTitle)
        listItem.appendChild(factContent)
        counter = counter + 1
    });
}

createFactList();