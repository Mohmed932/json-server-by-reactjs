import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { data: [], status: false, error: false };

export const getdata = createAsyncThunk(
  "prodect/getdata",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch("http://localhost:5000/prodect");
      const res = await req.json();
      return res;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const Alldata = createSlice({
  name: "prodect",
  initialState,
  extraReducers: {
    [getdata.pending]: (state, action) => {},
    [getdata.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [getdata.rejected]: (state, action) => {},
  },
});

export default Alldata.reducer;
