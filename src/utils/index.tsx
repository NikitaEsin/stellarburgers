import {baseUrl} from '../services/actions/constants'

export function checkResponse(res: any) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function request(endPoint: string, options?: any) {
  return fetch(`${baseUrl}${endPoint}`, options).then(checkResponse);
}

export function handleFormSubmit(event: any, func: any, navigate?: any) {
  event.preventDefault()
  return func
}