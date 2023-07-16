import { useDispatch } from 'react-redux';
import { AppDispatch } from '../services/redusers';
import { useSelector } from 'react-redux';
import { RootState } from '../services/redusers';
import { TypedUseSelectorHook } from 'react-redux';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;