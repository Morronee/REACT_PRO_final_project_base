import type { ReviewUserLike } from 'entities/product';

export type Role = 'USER';

export type Post = BaseDates & {
	id: string;
	userId: string;
	title: string;
	slug: string;
	description: string;
	body: string;
	images: string;
	tags: string[];
	isPublished: boolean;
	favoritesCount: number;
};

export type BaseUser = {
	id: string;
	roles: Role[];
	name: string;
	email: string;
	phone: string;
	avatarPath: string;
	about: string;
};

export type User = BaseUser & {
	likes: ReviewUserLike[];
	favoritesPost: FavoritePost[];
};

export type LikeUser = BaseDates &
	BaseUser & {
		provider: null;
		isAdmin: boolean;
		isBlocked: boolean;
		password: string;
	};

export type Token = {
	accessToken: string;
};
