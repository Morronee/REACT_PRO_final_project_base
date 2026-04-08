import { useAppSelector } from 'shared/store/utils.ts';
import { isLiked } from 'shared/utils';
import { useGetProductsQuery } from 'entities/product/api';
import { productsSelectors } from 'entities/product';
import { userSelectors } from 'entities/user';

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

	let products = data?.products || [];

	const user = useAppSelector(userSelectors.getUser);

	products = products.filter((product) => isLiked(product.likes, user?.id));

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
