import { useGetProductsQuery } from 'entities/product/api';
import { productsSelectors } from 'entities/product';
import { useAppSelector } from 'shared/hooks';

export const useProducts = () => {
	const { searchText, page, perPage, sort } = useAppSelector(
		productsSelectors.getProductsState
	);

	const { isLoading, isError, error, data, isFetching } = useGetProductsQuery({
		searchText,
		sort,
		page,
		perPage,
	});

	const products = data?.products || [];

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
