// Write your JavaScript code here!


window.addEventListener("load", function() {
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
   })

   const button = document.querySelector("form");
   const input = document.getElementsByTagName("input");
   
   /*const pilot = input[0].value;
   const copilot = input[1].value;
   const fuel = input[2].value;
   const cargo = input[3].value;*/
   button.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuel = document.querySelector("input[name=fuelLevel]").value;
        let cargo = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document, pilot, copilot, fuel, cargo);
       
   })
});