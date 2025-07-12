import axios from "axios";

const url = "http://127.0.0.1:5000/api";

export async function getAuthenticated(endpoint: string) {
  if (!endpoint.startsWith("/")) {
    endpoint = `/${endpoint}`;
  }
  const { data } = await axios.get(endpoint, {
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
  const { data } = await axios.post(endpoint, params, {
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
  const { data } = await axios.get(endpoint);
  return data;
}

export async function post(endpoint: string, params: unknown) {
  if (!endpoint.startsWith("/")) {
    endpoint = `/${endpoint}`;
  }
  const { data } = await axios.post(endpoint, params);
  return data;
}
