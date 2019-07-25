import { PROXY } from "../helpers/constants";

export function getData(url = ``, accessToken) {
  const authorization = accessToken || localStorage.getItem('access_token');
  url = url.includes('http') ? url : PROXY.concat('', url);

  return fetch(url, {
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': "*",
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authorization}`,
    }
  })
  .then(response => response.json());
}

export function postData(url = ``, data = {}, accessToken) {
  const authorization = accessToken || localStorage.getItem('access_token');
  url = url.includes('http') ? url : PROXY.concat('', url);

  return fetch(url, {
    method: "POST",
    body: data,
    mode: "cors",
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authorization}`,
    }
  })
  .then(response => response.json());
}

export function putData(url = ``, data = {}, accessToken) {
  const authorization = accessToken || localStorage.getItem('access_token');
  url = url.includes('http') ? url : PROXY.concat('', url);

  return fetch(url, {
    method: "PUT",
    body: data,
    mode: "cors",
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authorization}`,
    }
  })
  .then(response => response.json());
}
