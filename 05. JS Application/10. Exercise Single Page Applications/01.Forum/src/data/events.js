import { del, get, post, put } from "../utility/requester.js";

const endpoints = {
  getPosts: "/posts",
  create: "/posts",
  comments: "/comments",
};

export async function getAllEvenets() {
  return get(endpoints.getPosts);
}

// export async function getEventById(id) {
//   return get(endpoints.eventById + id);
// }

export async function createEvent(title, username, post) {
  return post(endpoints.create, {
    title,
    username,
    post,
  });
}

// export async function updateEvenet(id, data) {
//   return put(endpoints.eventById + id, data);
// }

// export async function deleteEvent(id) {
//   return del(endpoints.eventById + id);
// }
