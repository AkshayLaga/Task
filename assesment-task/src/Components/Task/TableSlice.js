import { createSlice } from "@reduxjs/toolkit";
const TableSlice = createSlice({
  name: "table",
  initialState: [],
  reducers: {
    addUser: (state, { payload }) => {
      return [...state, ...payload];
    },
    removeUser: (state, action) => {
      const i = action.payload;

      const arr = [...state];
      arr.splice(i, 1);
    
    },
  },
});
export default TableSlice.reducer;
export const { addUser, removeUser } = TableSlice.actions;
export const selectUser = (state) => state.table;