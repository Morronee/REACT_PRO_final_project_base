import { combineReducers } from 'redux';
import { userSlice } from '../slices/user';
import { authApi } from '../api/authApi';
import { productApi } from 'entities/product/api';
import { productsSlice } from 'entities/product';
import { cartSlice } from 'entities/cart';

export const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[productsSlice.name]: productsSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[productApi.reducerPath]: productApi.reducer,
});
