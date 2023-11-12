// 7. A Miner Task

// You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line.

// Print the resources and their quantities in the format:

// {resource} –> {quantity}

// The quantities inputs will be in the range [1 … 2 000 000 000
function minerTask(arr) {
  let resource = {};
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      if (!resource.hasOwnProperty(arr[i])) {
        resource[arr[i]] = 0;
      }
    } else {
      resource[arr[i - 1]] += Number(arr[i]);
    }
  }
  let arrayResources = Object.entries(resource);
  // console.log(arrayResources);
  for (let [resource, qty] of arrayResources) {
    console.log(`${resource} -> ${qty}`);
  }
}
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
