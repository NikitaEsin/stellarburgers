import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL, ADD_ITEM } from '../actions/constants';


const initialState = {
    dataRequest: false,
    dataFailed: false,
    data: [],
    constructorData: [],
    buns: [],
    orderBun: [],
  }

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
          return {
            ...state,
            dataRequest: true,
            dataFailed: false,
          };
        }
        case GET_DATA_SUCCESS: {
          return {
            ...state,
            data: action.data,
            dataRequest: false,
          };
        }
        case GET_DATA_FAIL: {
          return {
            ...state,
            dataFailed: true,
            dataRequest: false,
          };
        }
        case ADD_ITEM: {
          const bun = state.buns.filter((item) => item._id === action.id.id)[0];
    
          if (bun) {
            return {
              ...state,
              orderBun: [bun],
            };
          }
          const newItem = state.data.filter((item) => item._id === action.id.id)[0];
          const modifyedItem = {
            ...newItem,
            specialId: action.specialId,
          };
          return {
            ...state,
            constructorData: [...state.constructorData, modifyedItem],
          };
        }
            default: 
            return state};
}

export const rootReducer = combineReducers({
    mainReducer,
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  
  export default store;