import { dataApi } from "../requester.js";
const url = "http://localhost:3030/jsonstore/advanced/dropdown";
async function getAllOptions() {
  return await dataApi.get(url);
}

async function postNewOption(data) {
  return await dataApi.post(url, data);
}

export const dataService = { getAllOptions, postNewOption };
