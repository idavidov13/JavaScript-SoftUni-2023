// You will be given an array of strings, which represents a list of all the restaurants with their workers.
// When the [Send] button is clicked:

// · Display the best restaurant of all the added restaurants with its average salary and best salary.

// · If there is a restaurant in the input array that is added more than once, you need to add new workers to the old ones and update the values of the average salary and the best salary.

// · The best restaurant is the restaurant with the highest average salary. If two restaurants have the same average salary the best restaurant is the first one added.

// · Display all workers in the best restaurant with their salaries.

// The best restaurant's workers should be sorted by their salaries in descending order.
// Input

// The input will be received from the given textarea in the form of an array of strings. Each string represents a restaurant with its workers: ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]
// Output

// · The output contains two strings

// o The first one is the best restaurant in the format:

// `Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`

// avgSalary and bestSalary must be formatted to the second decimal point.

// o The second one is all the workers in that restaurant in the following format:

// `Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`
function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  let textArea = document.querySelector("textarea");
  let bestRestaurantInfo = document.querySelector("#bestRestaurant p");
  let bestRestaurantWorkersInfo = document.querySelector("#workers p");

  function onClick() {
    let data = JSON.parse(textArea.value);
    let result = {};

    for (let line of data) {
      let [name, workers] = line.split(" - ");

      if (!result.hasOwnProperty(name)) {
        result[name] = {
          avgSalary: 0,
          bestSalary: 0,
          workers: [],
        };
      }
      let currentWorkers = getArrOfWorkers(workers, result[name].workers);
      result[name].workers = sortWorkers(currentWorkers);
      updateSalary(result[name]);
    }
    let bestRestaurant = findBestRestaurant(result);
    appendBestRestaurantInfo(bestRestaurant);
    appendBestRestaurantWorkersInfo(bestRestaurant[1].workers);
  }

  function getArrOfWorkers(workersData, existWorkers) {
    let arrOfWorkers = workersData.split(", ");
    for (let tokens of arrOfWorkers) {
      let [name, salary] = tokens.split(" ");
      salary = Number(salary);
      existWorkers.push({
        name,
        salary,
      });
    }
    return existWorkers;
  }

  function updateSalary(restaurant) {
    let sumOfSalary = 0;
    let bestSalary = 0;
    restaurant.workers.forEach((worker) => {
      sumOfSalary += worker.salary;
      if (bestSalary < worker.salary) {
        bestSalary = worker.salary;
      }
    });
    restaurant.bestSalary = bestSalary;
    restaurant.avgSalary = sumOfSalary / restaurant.workers.length;
  }

  function sortWorkers(works) {
    return works.sort((workerA, workerB) => workerB.salary - workerA.salary);
  }

  function findBestRestaurant(restaurants) {
    return Object.entries(restaurants).sort((a, b) => {
      return b[1].avgSalary - a[1].avgSalary;
    })[0];
  }

  function appendBestRestaurantInfo(data) {
    bestRestaurantInfo.textContent = `Name: ${
      data[0]
    } Average Salary: ${data[1].avgSalary.toFixed(
      2
    )} Best Salary: ${data[1].bestSalary.toFixed(2)}`;
  }

  function appendBestRestaurantWorkersInfo(workers) {
    let buffer = "";
    workers.forEach(function (worker) {
      buffer += `Name: ${worker.name} With Salary: ${worker.salary} `;
    });
    bestRestaurantWorkersInfo.textContent = buffer;
  }
}
