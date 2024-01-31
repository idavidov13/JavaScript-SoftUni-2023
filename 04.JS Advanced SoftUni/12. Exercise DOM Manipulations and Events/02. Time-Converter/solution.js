// 2. Time Converter

// Create a program that converts different time units. Your task is to add a click event listener to all [CONVERT] buttons. When a button is clicked, read the corresponding input field, convert the value to the three other time units and display it in the input fields.
function attachEventsListeners() {
  //take all needed elements
  let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let dButton = document.getElementById("daysBtn");
  let hButton = document.getElementById("hoursBtn");
  let mButton = document.getElementById("minutesBtn");
  let sButton = document.getElementById("secondsBtn");

  //convert days
  dButton.addEventListener("click", function () {
    let valueDays = days.value;
    let valueHours = Number(valueDays) * 24;
    let valueMinutes = Number(valueDays) * 24 * 60;
    let valueSeconds = Number(valueDays) * 24 * 60 * 60;
    hours.value = valueHours;
    minutes.value = valueMinutes;
    seconds.value = valueSeconds;
  });

  //convert hours
  hButton.addEventListener("click", function () {
    let valueHours = hours.value;
    let valueDays = Number(valueHours) / 24;
    let valueMinutes = Number(valueHours) * 60;
    let valueSeconds = Number(valueHours) * 60 * 60;
    days.value = valueDays;
    minutes.value = valueMinutes;
    seconds.value = valueSeconds;
  });

  //convert minutes
  mButton.addEventListener("click", function () {
    let valueMinutes = minutes.value;
    let valueDays = Number(valueMinutes) / 24 / 60;
    let valueHours = Number(valueMinutes) / 60;
    let valueSeconds = Number(valueMinutes) * 60;
    days.value = valueDays;
    hours.value = valueHours;
    seconds.value = valueSeconds;
  });

  //convert seconds
  sButton.addEventListener("click", function () {
    let valueSeconds = seconds.value;
    let valueDays = Number(valueSeconds) / 24 / 60 / 60;
    let valueHours = Number(valueSeconds) / 60 / 60;
    let valueMinutes = Number(valueSeconds) / 60;
    days.value = valueDays;
    hours.value = valueHours;
    minutes.value = valueMinutes;
  });
}
