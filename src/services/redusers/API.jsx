import { GET_TOKEN, DELETE_TOKEN } from '../actions/constants';

export const tokenReducer = (
    state = { token: '', isLoggedIn:false },
    action
  ) => {
    switch (action.type) {
      case GET_TOKEN: {
        setTimeout(() => {
          state.isLoggedIn = false;
        }, 1200000);
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