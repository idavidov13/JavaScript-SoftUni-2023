// 1. Bus Stop

// Write a JS program that displays arrival times for all buses by a given bus stop ID when a button is clicked. Use the skeleton from the provided resources.

// When the button with ID 'submit' is clicked, the name of the bus stop appears and the list bellow gets filled with all the buses that are expected and their time of arrival. Take the value of the input field with id 'stopId'. Submit a GET request to http://localhost:3030/jsonstore/bus/businfo/:busId (replace the highlighted part with the correct value) and parse the response. You will receive a JSON object in the format:

// stopId: {

// name: stopName,

// buses: { busId: time, … }

// }

// Place the name property as text inside the div with ID 'stopName' and each bus as a list item with text:

// "Bus {busId} arrives in {time} minutes"

// Replace all highlighted parts with the relevant value from the response. If the request is not successful, or the information is not in the expected format, display "Error" as stopName and nothing in the list. The list should be cleared before every request is sent.

// Note: The service will respond with valid data to IDs 1287, 1308, 1327 and 2334.

// See examples on the next page.
function getInfo() {
  const stopIdRef = document.getElementById("stopId");
  const stopId = stopIdRef.value;
  const stopNameRef = document.getElementById("stopName");
  const busesRef = document.getElementById("buses");

  stopNameRef.textContent = "";
  busesRef.innerHTML = "";

  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  const request = fetch(url);
  request
    .then((res) => {
      res
        .json()
        .then((data) => {
          stopNameRef.textContent = data.name;
          appendChild(Object.entries(data.buses));
        })
        .catch((e) => {
          stopNameRef.textContent = "Error";
        });
    })
    .catch((err) => {
      stopNameRef.textContent = "Error";
    });

  function appendChild(data) {
    for ([bus, time] of data) {
      let element = document.createElement("li");
      element.textContent = `Bus ${bus} arrives in ${time} minutes`;
      busesRef.appendChild(element);
    }
  }
}
