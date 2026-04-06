export {};

declare global {
	type Category = {
		id: number;
		name: string;
		slug: string;
	};

	type Role = 'USER';

	type FavoritePost = {
		id: string;
		userId: string;
		postId: string;
		post: Post;
	};

	type Post = BaseDates & {
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



	type BaseUser = {
		id: string;
		roles: Role[];
		name: string;
		email: string;
		phone: string;
		avatarPath: string;
		about: string;
	};

	type User = BaseUser & {
		likes: ReviewUserLike[];
		favoritesPost: FavoritePost[];
	};

	type LikeUser = BaseDates &
		BaseUser & {
			provider: null;
			isAdmin: boolean;
			isBlocked: boolean;
			password: string;
		};



	type BaseDates = {
		createdAt: string;
		updatedAt?: string;
	};

	type Sort = 'high-price' | 'low-price' | 'newest' | 'oldest';

	type Token = {
		accessToken: string;
	};
}
