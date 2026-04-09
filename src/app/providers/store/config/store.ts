import { configureStore } from '@reduxjs/toolkit';
import AppApi from 'shared/api/ApiServise.ts';
import { rootReducer } from './rootReducer.ts';
import { authApi } from 'features/auth/api/authApi.ts';
import { productApi } from 'entities/product/api';
import { USER_STORAGE_KEY } from 'entities/user';

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

if (typeof window !== 'undefined') {
	store.subscribe(() => {
		try {
			const { user, accessToken } = store.getState().user;
			window.localStorage.setItem(
				USER_STORAGE_KEY,
				JSON.stringify({ user, accessToken })
			);
		} catch {
			// ignore localStorage write errors
		}
	});
}
