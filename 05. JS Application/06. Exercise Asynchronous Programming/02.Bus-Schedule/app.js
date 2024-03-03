// 2. Bus Schedule

// Write a JS program that tracks the progress of a bus on it’s route and announces it inside an info box. The program should display which is the upcoming stop and once the bus arrives, to request from the server the name of the next one. Use the skeleton from the provided resources.

// The bus has two states – moving and stopped. When it is stopped, only the button “Depart” is enabled, while the info box shows the name of the current stop. When it is moving, only the button “Arrive” is enabled, while the info box shows the name of the upcoming stop. Initially, the info box shows "Not Connected" and the "Arrive" button is disabled. The ID of the first stop is "depot".

// When the "Depart" button is clicked, make a GET request to the server with the ID of the current stop to address http://localhost:3030/jsonstore/bus/schedule/:id (replace the highlighted part with the relevant value). As a response, you will receive a JSON object in the following format:

// stopId {

// name: stopName,

// next: nextStopId

// }

// Update the info box with the information from the response, disable the “Depart” button and enable the “Arrive” button. The info box text should look like this (replace the highlighted part with the relevant value):

// Next stop {stopName}

// When the "Arrive" button is clicked, update the text, disable the “Arrive” button and enable the “Depart” button. The info box text should look like this (replace the highlighted part with the relevant value):

// Arriving at {stopName}

// Clicking the buttons successfully will cycle through the entire schedule. If invalid data is received, show "Error" inside the info box and disable both buttons.
function solve() {
  const infoSpanRef = document.querySelector("#info span");
  const url = `http://localhost:3030/jsonstore/bus/schedule/`;
  const departBtnRef = document.getElementById("depart");
  const arriveBtnRef = document.getElementById("arrive");
  const stop = {
    currentStop: "",
    nextStop: "depot",
  };

  async function depart() {
    try {
      const response = await fetch(url + stop.nextStop);
      const data = await response.json();
      stop.currentStop = data.name;
      stop.nextStop = data.next;
      infoSpanRef.textContent = `Next stop ${stop.currentStop}`;
      departBtnRef.disabled = true;
      arriveBtnRef.disabled = false;
    } catch (error) {
      infoSpanRef.textContent = "Error";
      departBtnRef.disabled = true;
      arriveBtnRef.disabled = true;
    }
  }

  async function arrive() {
    infoSpanRef.textContent = `Arriving at ${stop.currentStop}`;
    departBtnRef.disabled = false;
    arriveBtnRef.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
