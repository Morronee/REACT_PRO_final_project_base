import { configureStore } from '@reduxjs/toolkit';
import AppApi from '../api/ApiServise';
import { rootReducer } from './reducers/rootReducer';
import { authApi } from './api/authApi';
import { productApi } from 'entities/product/api';

export const store = configureStore({
	reducer: rootReducer,
	devTools: import.meta.env.DEV,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: AppApi,
			},
		}).concat([authApi.middleware, productApi.middleware]),
});
