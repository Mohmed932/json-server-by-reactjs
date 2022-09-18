import { configureStore } from "@reduxjs/toolkit";
import Alldata from "./AllData";

const store = configureStore({ reducer: { Alldata } });

export default store;
