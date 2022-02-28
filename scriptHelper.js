// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const destination = document.getElementById("missionTarget");
   destination.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
   `
}

function validateInput(testInput) {
   if(isNaN(testInput) == true) {
       if(testInput == "") {
           return "Empty";
       } else {
           return "Not a Number";
       }
   } else {
       return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if(validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || 
   validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty") {
       window.alert("All fields are required. Please enter data in all fields.");
   } else if(validateInput(pilot) == "Is a Number" || validateInput(copilot) == "Is a Number" || 
   validateInput(fuelLevel) == "Not a Number" || validateInput(cargoLevel) == "Not a Number") {
       window.alert("Invalid input. Please enter in correct data.");
   } else {
       const launchStatus = document.getElementByID("launchStatus");
       const faultyItems = document.getElementByID("faultyItems");
       const pilotStatus = document.getElementByID("pilotStatus");
       const copilotStatus = document.getElementByID("copilotStatus");
       const fuel = document.getElementByID("fuelStatus");
       const cargo = document.getElementByID("cargoStatus");

       pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
       copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`;
       if(fuelLevel < 10000) {
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visibile";
        fuel.innerHTML = `Not enough fuel for the journey.`;
       }
       if(cargo > 10000) {
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visibile";
        cargo.innerHTML = `Too much mass for take off.`;
       }
       if(launchStatus.innerHTML !== `Shuttle not ready for launch`) {
        launchStatus.innerHTML = `Shuttle is ready for launch`;
       }
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json()});

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*6)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
