import { api } from "../utility/requester.js";

const BASE_URL = "http://localhost:3030/jsonstore/collections/myboard";
const endpoints = {
  getPosts: "/posts",
  create: "/posts",
  comments: "/comments",
};

async function createPost(data) {
  return await api.post(BASE_URL + endpoints.create, data);
}

async function getAllPosts() {
  return await api.get(BASE_URL + endpoints.getPosts);
}

async function getPostComments(id) {
  return await api.get(BASE_URL + endpoints.furniture + `/${id}`);
}

async function delFurniture(id) {
  return await api.del(BASE_URL + endpoints.furniture + `/${id}`);
}

async function getMyFurniture(userId) {
  return await api.get(BASE_URL + endpoints.furniture + `/${id}`);
}

async function updateFurniture(id, data) {
  return await api.put(BASE_URL + endpoints.furniture + `/${id}`, data);
}

export const dataService = {
  createPost,
  getAllPosts,
  getPostComments,
};
