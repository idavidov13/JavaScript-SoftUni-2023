const express = require("express");
const { configDatabase } = require("./config/configDatabase");
const { configHbs } = require("./config/configHbs");
const { configExpress } = require("./config/configExpress");
const { configRoutes } = require("./config/configRoutes");
const { register, login } = require("./services/user");
const { createToken, verifyToken } = require("./services/jwt");
const api = require("./services/recipe");

start();

async function start() {
  const app = express();

  await configDatabase();
  configHbs(app);
  configExpress(app);
  configRoutes(app);

  app.listen(3000, () => {
    console.log("Server started http://127.0.0.1:3000");
    //test();
  });
}

// // Creating an user
// async function test() {
//   try {
//     const result = await register("peter@abv.bg", "Peter", "123");

//     const token = createToken(result);
//     console.log(token);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }

// // Testing the Token
// async function test() {
//   try {
//     const token =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBldGVyQGFidi5iZyIsInVzZXJuYW1lIjoiUGV0ZXIiLCJfaWQiOiI2Njc4MDllMTQ3MDZiNWJhZjdhZTZiODkiLCJpYXQiOjE3MTkxNDI4ODEsImV4cCI6MTcxOTIyOTI4MX0.g8BW4g2PW1apKwDybMXCCzmxjTr5EangGwlVVTScJjc";

//     const parsed = verifyToken(token);
//     console.log(parsed);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }

// // Testing the Login
// async function test() {
//   try {
//     const result = await login("john@abv.bg", "123");
//     const token = createToken(result);
//     console.log(token);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }

// // Creating the Volcano
// async function test() {
//   try {
//     const result = await api.create(
//       {
//         title: "Mandja Carbonara",
//         ingredients:
//           "200g spaghetti / 100g pancetta / 2 large eggs / 50g pecorino cheese / 50g parmesan / Freshly ground black pepper / Salt / 2 cloves of garlic / 50g unsalted butter",
//         instructions:
//           "Put a large saucepan of water on to boil. Finely chop the pancetta, having first removed any rind. Finely grate both cheeses and mix them together. Beat the eggs in a medium bowl, season with a little freshly grated black pepper and set everything aside. Add 1 tsp salt to the boiling water, add the spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente. Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it. While the spaghetti is cooking, fry the pancetta with the garlic. Keep the heat hot for a few minutes and when the pancetta is golden and crisp, discard the garlic. Take the pan off the heat and set aside. Save some of the pasta water and then drain the spaghetti and add it to the pancetta. Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later. Quickly pour the eggs and cheese into the pasta, lifting up the spaghetti so it mixes easily. Use the reserved water to keep it saucy, if necessary. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper.",
//         description:
//           "A classic Bulgarian pasta dish made with eggs, cheese, pancetta, and pepper.",
//         image:
//           "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg",
//       },
//       "667809e14706b5baf7ae6b89"
//     );
//     console.log(result);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }

// // Testing the Volcano
// async function test() {
//   try {
//     const data = await api.getById("66780e6b8bdfe8533389e2d8");
//     console.log(data);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }

// // Updating the Volcano
// async function test() {
//   try {
//     const formData = {
//       title: "TSpaghetti Carbonara",
//       ingredients:
//         "200g spaghetti / 100g pancetta / 2 large eggs / 50g pecorino cheese / 50g parmesan / Freshly ground black pepper / Salt / 2 cloves of garlic / 50g unsalted butter",
//       instructions:
//         "TEST Put a large saucepan of water on to boil. Finely chop the pancetta, having first removed any rind. Finely grate both cheeses and mix them together. Beat the eggs in a medium bowl, season with a little freshly grated black pepper and set everything aside. Add 1 tsp salt to the boiling water, add the spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente. Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it. While the spaghetti is cooking, fry the pancetta with the garlic. Keep the heat hot for a few minutes and when the pancetta is golden and crisp, discard the garlic. Take the pan off the heat and set aside. Save some of the pasta water and then drain the spaghetti and add it to the pancetta. Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later. Quickly pour the eggs and cheese into the pasta, lifting up the spaghetti so it mixes easily. Use the reserved water to keep it saucy, if necessary. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper.",
//       description:
//         "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
//       image:
//         "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg",
//     };

//     const dataId = "66780e6b8bdfe8533389e2d8";
//     const userId = "667809e14706b5baf7ae6b89";

//     const result = await api.update(dataId, formData, userId);

//     console.log(result);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }

// // Deleting the Volcano
// async function test() {
//   try {
//     const dataId = "66780e6b8bdfe8533389e2d8";
//     const userId = "667809e14706b5baf7ae6b89";

//     await api.deleteById(dataId, userId);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }

// // Voting the Volcano
// async function test() {
//   try {
//     const dataId = "667810a3330956c97b374118";
//     const userId = "66780999a921cb218250d5db";

//     const result = await api.addRecommend(dataId, userId);
//     console.log(result);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }

// // Read Record
// async function test() {
//   try {
//     const dataId = "667810a3330956c97b374118";

//     const result = await api.getById(dataId);
//     console.log(result.recommendList.length);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }
