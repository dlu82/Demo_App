import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../apis/api';

const initialState = {
  token: null,
  status: 'idle',
  error: null,
  message: null,
  user: null,
  // search: null,
};

export const productUrl = createAsyncThunk(
  'prdct/productUrl',
  async (params, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    // console.log('PRAMSS=======>>>   ', params);
    try {
      const response = await api.get(`https://dummyjson.com/products/`, params);
      // console.log('RESPONSEE=====>>  ', response);
      return response.data;
    } catch (error) {
      // console.log('Error=======>>>   ', error.response);
      return rejectWithValue(error.response.data);
    }
  },
);

export const searchProducts = createAsyncThunk(
  'prdct/searchProducts',
  async (params, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    // console.log(params, '=====syhdfvbg==');
    try {
      const response = await api.get(
        `https://dummyjson.com/products/search?q=${params}`,
      );
      // console.log('responSEEE=======>>>   ', response);

      return response.data;
    } catch (error) {
      // console.log('Error=======>>>   ', error);
      return rejectWithValue(error.response.data);
    }
  },
);

const authSlice = createSlice({
  name: 'prdct',
  initialState,
  reducers: {},
  extraReducers: {
    [searchProducts.pending]: (state, action) => {
      state.status = 'loading';
      state.message = null;
    },
    [searchProducts.fulfilled]: (state, action) => {
      // console.log('succsssss========== ', action);
      state.status = 'succeeded';
      // state.search = action?.payload?.data;
    },
    [searchProducts.rejected]: (state, action) => {
      // console.log('errrrrr======== ', action);
      state.status = 'failed';
    },

    [productUrl.pending]: (state, action) => {
      state.status = 'loading';
      state.message = null;
    },
    [productUrl.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.user = action?.payload;
    },
    [productUrl.rejected]: (state, action) => {
      // console.log('useRegiserErroor1=======>', action);
      state.status = 'failed';
    },
  },
});
export const {} = authSlice.actions;
export default authSlice.reducer;
