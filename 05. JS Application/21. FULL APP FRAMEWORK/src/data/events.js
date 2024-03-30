import { del, get, post, put } from "./request.js";

//ENDPOINTS OF THE REQUEST THAT WILL BE MADE
const endpoints = {
  events: "/data/events",
  dashboard: "/data/events?sortBy=_createdOn%20desc",
  eventById: "/data/events/",
};

//GETTING ALL RECORDS
export async function getAllEvenets() {
  return get(endpoints.dashboard);
}

//GETTING SPECIFIC RECORD
export async function getEventById(id) {
  return get(endpoints.eventById + id);
}

//CREATING A NEW RECORD
export async function createEvent(name, imageUrl, category, description, date) {
  return post(endpoints.events, {
    name,
    imageUrl,
    category,
    description,
    date,
  });
}

//UPDATING A RECORD
export async function updateEvenet(id, data) {
  return put(endpoints.eventById + id, data);
}

//DELETING A RECORD
export async function deleteEvent(id) {
  return del(endpoints.eventById + id);
}
