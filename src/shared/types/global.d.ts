export {};

declare global {
	type Category = {
		id: number;
		name: string;
		slug: string;
	};

	type BaseDates = {
		createdAt: string;
		updatedAt?: string;
	};

	type Sort = 'high-price' | 'low-price' | 'newest' | 'oldest';

	type FavoritePost = {
		id: string;
		userId: string;
		postId: string;
		post: Post;
	};
}
