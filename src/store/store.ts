import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TaskSlice } from './taskSlice';
import { StateTabsSlice } from './stateTabsSlice';

export const store = configureStore({
  reducer: {
    task: TaskSlice.reducer,
    stateTabs: StateTabsSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
