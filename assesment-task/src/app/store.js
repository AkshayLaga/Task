import { configureStore} from "@reduxjs/toolkit";

import TableReducer from "../Components/Task/TableSlice";
const Store = configureStore({
  reducer: {
 
    table: TableReducer,
  },
 
});
export default Store;