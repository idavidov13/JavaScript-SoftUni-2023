const express = require("express");
const { configDatabase } = require("./config/configDatabase");
const { configHbs } = require("./config/configHbs");
const { configExpress } = require("./config/configExpress");
const { configRoutes } = require("./config/configRoutes");
const { register, login } = require("./services/user");
const { createToken, verifyToken } = require("./services/jwt");
const api = require("./services/volcano");

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
//     const result = await register("john@abv.bg", "John", "123");

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
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AYWJ2LmJnIiwidXNlcm5hbWUiOiJKb2huIiwiX2lkIjoiNjY3NTA5ZTk2NjlmYWY5NDAzNjI4NDZhIiwiaWF0IjoxNzE4OTQ2MjgxLCJleHAiOjE3MTkwMzI2ODF9.1yzJ9cXJ344fcEA37YWDsK06BYJWl_dbqxFVugN9nu8";

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
//         name: "Mount Etna",
//         location: "Sicily Italy",
//         elevation: 250,
//         lastEruption: 2018,
//         image: "http://localhost:3000/static/images/etna.jpg",
//         typeVolcano: "Stratovolcanoes",
//         description:
//           "Mount Etna is a submarine volcano in the South Pacific located about 30 km south of the submarine volcano of Fonuafo'ou and 65 km north of Tongatapu, Tonga's main island. It is part of the highly active Kermadec-Tonga subduction zone and its associated volcanic arc, which extends from New Zealand north-northeast to Fiji, and is formed by the subduction of the Pacific Plate under the Indo-Australian Plate. It lies about 100 km above a very active seismic zone.",
//       },
//       "667509e9669faf940362846a"
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
//     const data = await api.getById("667511b136b7acbf2e60d053");
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
//       name: "Hunga Tonga",
//       location: "Tonga Islands",
//       elevation: 114,
//       lastEruption: 2024,
//       image: "http://localhost:3000/static/images/hunga-tonga.jpg",
//       typeVolcano: "Submarine",
//       description:
//         "Hunga Tonga-Hunga is a submarine volcano in the South Pacific located about 30 km south of the submarine volcano of Fonuafo'ou and 65 km north of Tongatapu, Tonga's main island. It is part of the highly active Kermadec-Tonga subduction zone and its associated volcanic arc, which extends from New Zealand north-northeast to Fiji, and is formed by the subduction of the Pacific Plate under the Indo-Australian Plate. It lies about 100 km above a very active seismic zone.",
//     };

//     const dataId = "667514f9d4f002bb9b0ca7ba";
//     const userId = "667509e9669faf940362846a";

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
//     const dataId = "6675180c82eb79ce16e1d4b5";
//     const userId = "667509e9669faf940362846a";

//     await api.deleteById(dataId, userId);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }

// // Voting the Volcano
// async function test() {
//   try {
//     const dataId = "6675188b3402900a4f8d6d15";
//     const userId = "667508d80c73e6ec61b23b1f";

//     const result = await api.addVote(dataId, userId);
//     console.log(result);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }

// // Read Record
// async function test() {
//   try {
//     const dataId = "6675188b3402900a4f8d6d15";
//     const userId = "667508d80c73e6ec61b23b1f";

//     const result = await api.getById(dataId);
//     console.log(result.voteList.length);
//   } catch (error) {
//     console.log("Caught error");
//     console.error(error.message);
//   }
// }
