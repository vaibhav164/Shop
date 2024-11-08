import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('api/fetchData', async () => {
  const URL = 'https://fakestoreapi.com/products'
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: {
    data: null,  
    loading: false,  
    error: null,  
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true; 
        state.error = null; 
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;  
        state.data = action.payload;  
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.error.message;  
      });
  },
});

export default apiDataSlice.reducer;
