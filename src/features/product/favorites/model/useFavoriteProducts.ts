import { useGetProductsQuery } from 'entities/product/api';
import { type Product, productsSelectors } from 'entities/product';
import { userSelectors } from 'entities/user';
import { useAppSelector } from 'shared/hooks';
import { isLiked } from 'entities/product/lib/isLiked.ts';
import { useMemo } from 'react';

export const useFavoriteProducts = () => {
	const { searchText, page, sort } = useAppSelector(
		productsSelectors.getProductsState
	);

	const { isLoading, isError, error, data, isFetching } = useGetProductsQuery({
		searchText,
		sort,
		page,
		perPage: undefined,
	});

	const user = useAppSelector(userSelectors.getUser);

	const products: Product[] = useMemo(() => {
		if (!data?.products) {
			return [];
		}

		return data.products.filter((product) => isLiked(product.likes, user?.id));
	}, [data?.products, user?.id]);

	const productsCount = data?.length || 0;

	return {
		products,
		isLoading,
		isError,
		isFetching,
		error,
		productsCount,
	};
};
