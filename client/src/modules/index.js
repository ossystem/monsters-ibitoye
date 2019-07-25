const proxy = "http://localhost:5000";

export function getData(url = ``) {
  return fetch(proxy.concat('', url), {
    method: "GET"
  })
  .then(response => response.json());
}

export function postData(url = ``, data = {}) {
  return fetch(proxy.concat('', url), {
    method: "POST",
    body: data,
    mode: "cors",
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json());
}

export function putData(url = ``, data = {}) {
  return fetch(proxy.concat('', url), {
    method: "PUT",
    body: data,
    mode: "cors",
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json());
}
