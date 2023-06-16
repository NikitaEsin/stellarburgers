import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  ADD_ITEM,
  REMOVE_ITEM,
  MOVE_CONSTRUCTOR_ITEM,
} from '../actions/constants';
import update from 'immutability-helper';
import { orderReducer, infoReducer } from './Modal';
import { tokenReducer } from './API';

const initialState = {
    dataRequest: false,
    dataFailed: false,
    data: [],
    constructorData: [],
    buns: [],
    orderBun: [],
  }

export const mainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_DATA: {
          return {
            ...state,
            dataRequest: true,
            dataFailed: false,
          };
        }
        case GET_DATA_SUCCESS: {
          const buns = action.data.filter((item: any) => item.type === 'bun');
          return {
            ...state,
            data: action.data,
            dataRequest: false,
            constructorData: [...state.constructorData],
            buns: buns,

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
          const bun = state.buns.filter((item: any) => item._id === action.id.id)[0];
          if (bun) {
            return {
              ...state,
              orderBun: [bun],
            };
          }
          const newItem: any = state.data.filter((item: any) => item._id === action.id.id)[0];
          const modifyedItem = {
            ...newItem,
            specialId: action.specialId,
          };
          return {
            ...state,
            constructorData: [...state.constructorData, modifyedItem],
          };
        }
        case REMOVE_ITEM: {
          return {
            ...state,
            constructorData: [
              ...state.constructorData.filter(
                (item: any) => item.specialId !== action.id
              ),
            ],
          };
        }
        case MOVE_CONSTRUCTOR_ITEM: {
          return {
            ...state,
            constructorData: [
              ...update(state.constructorData, {
                $splice: [
                  [action.dragIndex, 1],
                  [action.hoverIndex, 0, state.constructorData[action.dragIndex]],
                ],
              }),
            ],
          };
        }
            default: 
            return state};
}

export const rootReducer = combineReducers({
    mainReducer, orderReducer, infoReducer, tokenReducer,
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  
  export default store;