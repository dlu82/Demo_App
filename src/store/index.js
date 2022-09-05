import {combineReducers} from '@reduxjs/toolkit';

import regSlice from './slices/regSlice';
import productSlice from './slices/productSlice';

const rootReducer = combineReducers({
  auth: regSlice,
  prdct: productSlice,
});

export default rootReducer;
