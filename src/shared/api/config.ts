import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type { RootState } from 'shared/types';

const toAuthHeader = (token: string) => {
	if (token.toLowerCase().startsWith('bearer ')) {
		return token;
	}

	return `Bearer ${token}`;
};

export const customBaseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_URL,
	prepareHeaders: (headers, { getState }) => {
		const accessToken = (getState() as RootState).user.accessToken;

		if (accessToken) {
			headers.set('authorization', toAuthHeader(accessToken));
		}
		return headers;
	},
});
