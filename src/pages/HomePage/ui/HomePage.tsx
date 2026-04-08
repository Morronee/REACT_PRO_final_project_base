import { WithQuery } from 'shared/store/HOCs/WithQuery.tsx';
import { LoadMore } from 'shared/ui/LoadMore';
import { useProducts } from 'entities/product/lib/useProducts.ts';
import { ProductCardList } from 'widgets/product';
import { WithProtection } from 'features/auth/guard';

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
