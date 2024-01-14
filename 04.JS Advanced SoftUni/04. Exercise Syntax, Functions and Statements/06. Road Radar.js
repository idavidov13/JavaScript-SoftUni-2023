// 6. Road Radar

// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit:

// · On the motorway, the limit is 130 km/h

// · On the interstate, the limit is 90 km/h

// · In the city, the limit is 50 km/h

// · Within a residential area, the limit is 20 km/h

// If the driver is within the limits, there should be a printed speed and the speed limit.

// `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds.

// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`

// For speeding up to 20 km/h over the limit, the status should be speeding.

// For speeding up to 40 km/h over the limit, the status should be excessive speeding.

// For anything else, status should be reckless driving.

// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.

// The output should be printed on the console.
function radar(speed, area) {
  let speedLimit = 0;
  let areaLimit = [130, 90, 50, 20];
  let status = "";
  switch (area) {
    case "motorway":
      speedLimit = areaLimit[0];
      break;
    case "interstate":
      speedLimit = areaLimit[1];
      break;
    case "city":
      speedLimit = areaLimit[2];
      break;
    case "residential":
      speedLimit = areaLimit[3];
      break;
  }
  if (speed <= speedLimit) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else {
    if (speed - speedLimit <= 20) {
      status = "speeding";
    } else if (speed - speedLimit <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${
        speed - speedLimit
      } km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  }
}
radar(200, "motorway");
