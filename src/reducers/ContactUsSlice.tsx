import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store/store";
import { DataModel } from "../components/ContactUsPage/DataModel";
export const initialStateData: DataModel = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export const initialStateDigits: string[] = [];
export const ContactUsSlice = createSlice({
  name: "contactUs",
  initialState: { data: initialStateData },
  reducers: {
    takeData: (state, action) => {
      console.log("Nome:  ", action.payload.name, "\nEmail: ", action.payload.email, "\nSubject:  ", action.payload.subject, "\nMessage:  ", action.payload.message);
      state.data = action.payload;
    },
  },
});

export const { takeData } = ContactUsSlice.actions;
export default ContactUsSlice.reducer;
