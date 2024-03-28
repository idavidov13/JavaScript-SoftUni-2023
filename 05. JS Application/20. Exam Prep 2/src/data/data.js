import { del, get, post, put } from "./request.js";

const endpoints = {
  allMotorCycle: "/data/motorcycles?sortBy=_createdOn%20desc",
  motorcycle: "/data/motorcycles",
};

export async function getAllMotorcycle() {
  return await get(endpoints.allMotorCycle);
}

export async function createMotor(data) {
  return await post(endpoints.motorcycle, data);
}

export async function getMotorById(id) {
  return await get(`${endpoints.motorcycle}/${id}`);
}

export async function deleteMotor(id) {
  return await del(`${endpoints.motorcycle}/${id}`);
}

export async function updateMotor(id, data) {
  return await put(`${endpoints.motorcycle}/${id}`, data);
}

export async function searchByQuery(query) {
  return await get(`/data/motorcycles?where=model%20LIKE%20%22${query}%22`);
}
