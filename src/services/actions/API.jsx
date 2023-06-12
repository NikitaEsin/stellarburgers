import {request} from '../../utils'
import { DELETE_TOKEN, GET_TOKEN } from './constants';

export const register = (email, password, name, navigate) => {
    request('/auth/register', {
      method: 'POST',
      headers: {
        authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    }).then((res) => {
      if (res.success) {
        return navigate
      }
    });
};

export const passwordRecovery = (password, code, navigate) => {
    request('/password-reset/reset', {
      method: 'POST',
      headers: {
        authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        token: code,
      }),
    }).then((res) => navigate);
};

export const getEmailCode = (email, navigate) => {
    request('/password-reset', {
      method: 'POST',
      headers: {
        authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then((res) => {
      if (res.success) {
        return navigate;
      }
    });
};

export const auth = (email, password, navigate) => {
  return function (dispatch) {
    request('/auth/login', {
      method: 'POST',
      headers: {
        authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => {
      if (res.success) {
        dispatch({type:GET_TOKEN, token:res.accessToken})
        localStorage.setItem('refreshToken', res.refreshToken);
        setTimeout(() => {
          localStorage.removeItem('accessToken');
        }, 1200000);
        return navigate;
      }
    });
}};

export function refresh() {
  return function (dispatch) {
  request('/auth/token', {
    method: 'POST',
    headers: {
      authorization: '91089aeb-9e00-4a3f-9cf9-1d0f7117fd38',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: localStorage.refreshToken,
    }),
  }).then((res) => dispatch({type:GET_TOKEN, token:res.accessToken}));
}}

export function removeToken() {
  return function (dispatch) {
    dispatch({
      type: DELETE_TOKEN,
    });
  };
}