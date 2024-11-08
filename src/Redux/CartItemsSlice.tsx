import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('api/fetchData', async () => {
  const URL = 'https://fakestoreapi.com/products'
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

const CartItemSlice = createSlice({
  name: 'apiData',
  initialState: {
    itemList: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.itemList = action.payload;
      })
  },
});

export default CartItemSlice.reducer;
