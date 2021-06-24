import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store/store";
import { DataModel } from "../components/ContactUsPage/DataModel";

export const initialStateDigits: string = "";
export const initialStateColor: string = "A";

export const CalculatorSlice = createSlice({
  name: "calculatorSlice",
  initialState: { digits: initialStateDigits, color: initialStateColor },
  reducers: {
    takeDigits: (state, action) => {
      state.digits = state.digits + action.payload;
    },
    deleteDigit: (state) => {
      state.digits = state.digits.slice(0, -1);
    },
    resetCalculator: (state) => {
      state.digits = "";
    },
    resultCalculator: (state, action) => {
      state.digits = "";
      state.digits = action.payload.toString();
    },
    errorCalculator: (state) => {
      state.digits = "Err";
    },
    chooseTheme: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { takeDigits, deleteDigit, resetCalculator, resultCalculator, errorCalculator, chooseTheme } = CalculatorSlice.actions;
export default CalculatorSlice.reducer;
