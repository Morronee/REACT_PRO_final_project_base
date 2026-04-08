import { WithQuery } from 'features/common/query-state';
import { ProductCardList } from 'widgets/product';
import { useProducts } from 'entities/product';
import { WithProtection } from 'features/auth/guard';
import { LoadMore } from 'features/product/load-more';

const ProductCardListWithQuery = WithQuery(ProductCardList);

export const HomePage = WithProtection(() => {
	const { products, isLoading, isError, error } = useProducts();

	return (
		<>
			<ProductCardListWithQuery
				title='Лакомства'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
			<LoadMore />
		</>
	);
});
