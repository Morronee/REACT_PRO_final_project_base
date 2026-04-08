import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type { RootState } from 'app/providers/store/lib/types.ts';

export const customBaseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_URL,
	prepareHeaders: (headers, { getState }) => {
		const accessToken = (getState() as RootState).user.accessToken;

		if (accessToken) {
			headers.set('authorization', accessToken);
		}
		return headers;
	},
});
