import { createSlice} from "@reduxjs/toolkit";
const initialState ={
  value:{
    address:{
      city:null
    }
  }
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    city: (state, action) => {
      state.value.address.city = action.payload.city
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;