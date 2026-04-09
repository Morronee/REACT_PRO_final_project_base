import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User, Token } from 'entities/user';

interface UserState {
	user: Partial<User> | null;
	accessToken: string;
}

type PersistedUserState = Pick<UserState, 'user' | 'accessToken'>;

const USER_STORAGE_KEY = 'user_state';

const getPersistedUserState = (): PersistedUserState | null => {
	if (typeof window === 'undefined') {
		return null;
	}

	try {
		const rawValue = window.localStorage.getItem(USER_STORAGE_KEY);
		if (!rawValue) {
			return null;
		}

		const parsedValue = JSON.parse(rawValue) as Partial<PersistedUserState>;
		return {
			user: parsedValue.user ?? null,
			accessToken: parsedValue.accessToken ?? '',
		};
	} catch {
		return null;
	}
};

const createInitState = (): UserState => {
	const persistedState = getPersistedUserState();
	return {
		user: persistedState?.user ?? null,
		accessToken: persistedState?.accessToken ?? '',
	};
};

export const userSlice = createSlice({
	name: 'user',
	initialState: createInitState(),
	reducers: {
		setAccessToken(state, action: PayloadAction<Pick<Token, 'accessToken'>>) {
			state.accessToken = action.payload.accessToken;
		},
		clearUser() {
			return createInitState();
		},
		setUser: (state, action: PayloadAction<UserState['user']>) => {
			state.user = action.payload;
		},
	},
	selectors: {
		getUser: (state: UserState) => state.user,
		getAccessToken: (state: Token) => state.accessToken,
	},
});

export const userActions = { ...userSlice.actions };
export const userSelectors = userSlice.selectors;
export { USER_STORAGE_KEY };
