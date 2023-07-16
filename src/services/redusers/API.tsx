import { GET_TOKEN, DELETE_TOKEN } from '../actions/constants';
import { TAuthActions } from '../actions/API';

export const tokenReducer = (
    state = { token: '', isLoggedIn:false },
    action: TAuthActions
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