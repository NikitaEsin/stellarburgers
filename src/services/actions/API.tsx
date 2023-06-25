import {request} from '../../utils'
import { DELETE_TOKEN, GET_TOKEN } from './constants';
import { myToken } from './constants';
import { AppDispatch } from '../redusers';

export interface IStoreTokenAction {
  readonly type: typeof GET_TOKEN;
  readonly token: string;
}

export interface IRemoveTokenAction {
  readonly type: typeof DELETE_TOKEN;
}

export type TAuthActions = IStoreTokenAction | IRemoveTokenAction;

export function register(
  email: string,
  password: string,
  name: string,
  nav: () => void
) {
  request('/auth/register', {
    method: 'POST',
    headers: {
      authorization: myToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  })
    .then((res) => {
      if (res.success) {
        nav();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function Auth(email: string, password: string, nav: () => void) {
  return function (dispatch: AppDispatch) {
    request('/auth/login', {
      method: 'POST',
      headers: {
        authorization: myToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.success) {
          dispatch({
            type: GET_TOKEN,
            token: res.accessToken,
          });
          sessionStorage.setItem('refreshToken', res.refreshToken);
          nav();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getEmailCode(email: string, nav: () => void) {
  request('/password-reset', {
    method: 'POST',
    headers: {
      authorization: myToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((res) => {
      if (res.success) {
        nav();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function passwordRecovery(password: string, code: string, nav: () => void) {
  request('/password-reset/reset', {
    method: 'POST',
    headers: {
      authorization: myToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      token: code,
    }),
  })
    .then(() => nav())
    .catch((err) => {
      console.log(err);
    });
}

export function getUserInfo(
  setName: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  token: string
) {
  request('/auth/user', {
    method: 'GET',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      setName(res.user.name);
      setEmail(res.user.email);
      setPassword(password);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function editUserInfo(
  name: string,
  email: string,
  password: string,
  token: string
) {
  request('/auth/user', {
    method: 'PATCH',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).catch((err) => {
    console.log(err);
  });
}

export function removeToken() {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: DELETE_TOKEN,
    });
  };
}

export function refresh() {
  return function (dispatch: AppDispatch) {
    request('/auth/token', {
      method: 'POST',
      headers: {
        authorization: myToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: sessionStorage.refreshToken,
      }),
    })
      .then((res) =>
        dispatch({
          type: GET_TOKEN,
          token: res.accessToken,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };
}