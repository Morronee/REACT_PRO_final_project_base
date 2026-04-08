import type { LikeUser, User } from 'entities/user';

export type ProductsData = {
	products: Product[];
	length: number;
};

export type BaseProduct = BaseDates & {
	id: string;
	name: string;
	description: string;
	price: number;
	images: string;
	slug: string;
	discount: number;
	isPublished: boolean;
	stock: number;
	tags: string[];
};

export type Product = BaseProduct & {
	reviews: Review[];
	category: Category;
	user: User;
	likes: Like[];
};

export type Review = BaseDates & {
	id: string;
	user: User;
	text: string;
	rating: number;
	product: ReviewProduct;
};

export type BaseLike = {
	id: string;
	userId: string;
	productId: string;
};

export type Like = BaseLike & {
	user: LikeUser;
};

export type ReviewUserLike = BaseLike & {
	product: ReviewProduct;
};

type ReviewProduct = BaseProduct & {
	categoryId: number;
	userId: string;
	wight: string;
};

export type CartProduct = Product & {
	count: number;
};

export interface IErrorResponse {
	data: { statusCode: number; message: string; error: string };
	status: number;
}

export interface ProductsResponse {
	products: Product[];
	length: number;
}

export interface SetLikeResponse {
	like: {
		id: string;
		userId: string;
		productId: string;
	};
	message: string;
}
export interface DeleteLikeResponse {
	product: {
		id: string;
		userId: string;
		productId: string;
	};
	message: string;
}
export interface ProductRequest {
	page: number;
	perPage?: number;
	sort: Sort;
	searchText: string;
};