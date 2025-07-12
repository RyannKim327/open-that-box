import axios from "axios";

const url = "http://127.0.0.1:5000/api";

export async function getAuthenticated(endpoint: string) {
  if (!endpoint.startsWith("/")) {
    endpoint = `/${endpoint}`;
  }
  const { data } = await axios.get(`${url}${endpoint}`, {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  return data;
}

export async function postAuthenticate(endpoint: string, params: unknown) {
  if (!endpoint.startsWith("/")) {
    endpoint = `/${endpoint}`;
  }
  const { data } = await axios.post(`${url}${endpoint}`, params, {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  return data;
}

export async function get(endpoint: string) {
  if (!endpoint.startsWith("/")) {
    endpoint = `/${endpoint}`;
  }
  const { data } = await axios.get(`${url}${endpoint}`);
  return data;
}

export async function post(endpoint: string, params: unknown) {
  if (!endpoint.startsWith("/")) {
    endpoint = `/${endpoint}`;
  }
  const { data } = await axios.post(`${url}${endpoint}`, params, {
    headers: {

      "Content-Type": "application/json",
    },
  });
  return data;
}
