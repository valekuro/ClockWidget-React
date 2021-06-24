import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ContactUsSlice from '../../reducers/ContactUsSlice';
import CalculatorSlice from '../../reducers/CalculatorSlice';
export const store = configureStore({
  reducer: {
    ContactUsSlice,
    CalculatorSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;