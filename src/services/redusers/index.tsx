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
import { wsReducer } from './Feed';
import { composeWithDevTools } from 'redux-devtools-extension';
import { socketMiddleware } from '../middleware';


export type TIngredient = {
  _id: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  _v: number;
  specialId?: string;
  amount?: number;
};

type IDataState = {
  dataRequest: boolean;
  dataFailed: boolean;
  data: TIngredient[];
  constructorData: TIngredient[];
  buns: TIngredient[];
  bunInOrder: TIngredient[];
};

export const initialState: IDataState = {
  dataRequest: false,
  dataFailed: false,
  data: [],
  constructorData: [],
  buns: [],
  bunInOrder: [],
};

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
          const buns = action.data.filter((item: TIngredient) => item.type === 'bun');
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
          const bun = state.buns.filter((item) => item._id === action.id.id)[0];
          if (bun) {
            return {
              ...state,
              bunInOrder: [bun],
            };
          }
          const newItem: TIngredient = state.data.filter((item) => item._id === action.id.id)[0];
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
                (item) => item.specialId !== action.id
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
    mainReducer, orderReducer, infoReducer, tokenReducer, wsReducer,
  });

const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedStore = loadState();

const store = createStore(
  rootReducer,
  persistedStore,
  composeWithDevTools(
    applyMiddleware(socketMiddleware('wss://norma.nomoreparties.space/orders')),
    applyMiddleware(thunk)
  )
);

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
  
  export default store;