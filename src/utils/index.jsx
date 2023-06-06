import {baseUrl} from '../services/actions/constants'

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function request(endPoint, options) {
  return fetch(`${baseUrl}${endPoint}`, options).then(checkResponse);
}

export function refresh() {
  request('/auth/token', {
    method: 'POST',
    headers: {
      authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: localStorage.refreshToken,
    }),
  }).then((res) => localStorage.setItem('accessToken', res.accessToken));
}