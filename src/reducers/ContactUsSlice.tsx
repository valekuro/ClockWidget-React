import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store/store";
import { DataModel } from "../components/ContactUsPage/DataModel";
export const initialState: DataModel = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const ContactUsSlice = createSlice({
  name: "contactUs",
  initialState: { data: initialState },
  reducers: {
    takeData: (state, action) => {
      console.log("Nome:  ", action.payload.name, "\nEmail: ", action.payload.email, "\nSubject:  ", action.payload.subject, "\nMessage:  ", action.payload.message);
      state.data = action.payload;
    },
  },
});

export const { takeData } = ContactUsSlice.actions;
export default ContactUsSlice.reducer;
