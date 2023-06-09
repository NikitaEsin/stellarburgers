import { GET_TOKEN, DELETE_TOKEN } from '../actions/constants';

export const tokenReducer = (
    state = { token: '', isLoggedIn:false },
    action: any
  ) => {
    switch (action.type) {
      case GET_TOKEN: {
        localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('accessToken', action.token);
        return {
          ...state,
          token: action.token,
          isLoggedIn: true,
        };
      }
      case DELETE_TOKEN: {
        return {
          ...state,
          token: '',
          isLoggedIn: false,
        };
      }
      default: {
        return state;
      }
    }
  };