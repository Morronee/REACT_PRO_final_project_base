import { configureStore } from '@reduxjs/toolkit';
import AppApi from 'shared/api/ApiServise.ts';
import { rootReducer } from './rootReducer.ts';
import { authApi } from 'features/auth/api/authApi.ts';
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
