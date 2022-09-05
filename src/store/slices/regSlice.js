import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../apis/api';

const initialState = {
  token: null,
  status: 'idle',
  error: null,
  message: null,
  user: null,
};

export const userRegister = createAsyncThunk(
  'auth/userRegister',
  async (params, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    // console.log('PRAMSS=======>>>   ', params);
    try {
      const response = await api.post(
        `http://restapi.adequateshop.com/api/authaccount/registration`,
        params,
      );
      console.log('RESPONSEE=====>>  ', response);
      return response.data;
    } catch (error) {
      console.log('Error=======>>>   ', error.response);
      return rejectWithValue(error.response.data);
    }
  },
);

export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (params, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    // console.log(params, '=====syhdfvbg==');
    try {
      const response = await api.post(
        `http://restapi.adequateshop.com/api/authaccount/login`,
        params,
      );
      console.log('responSEEE=======>>>   ', response);

      return response.data;
    } catch (error) {
      // console.log('Error=======>>>   ', error);
      return rejectWithValue(error.response.data);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state, action) => {
      state.status = 'loading';
      state.message = null;
    },
    [userLogin.fulfilled]: (state, action) => {
      // console.log('succsssss========== ', action);
      state.status = 'succeeded';
      state.user = action?.payload?.data?.user;
    },
    [userLogin.rejected]: (state, action) => {
      // console.log('errrrrr======== ', action);
      state.status = 'failed';
    },

    [userRegister.pending]: (state, action) => {
      state.status = 'loading';
      state.message = null;
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.user = action?.payload;
    },
    [userRegister.rejected]: (state, action) => {
      // console.log('useRegiserErroor1=======>', action);
      state.status = 'failed';
    },
  },
});
export const {} = authSlice.actions;
export default authSlice.reducer;
