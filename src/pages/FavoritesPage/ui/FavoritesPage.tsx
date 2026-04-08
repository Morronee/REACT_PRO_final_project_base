import { WithQuery } from 'shared/store/HOCs/WithQuery.tsx';
import { useProducts } from 'entities/product/lib/useProducts.ts';
import { ButtonBack } from 'shared/ui/ButtonBack';
import { ProductCardList } from 'widgets/product';
import { WithProtection } from 'features/auth/guard';

const ProductCardListWithQuery = WithQuery(ProductCardList);

export const FavoritesPage = WithProtection(() => {
	const { isLoading, isError, products, error } = useProducts();

	return (
		<>
			<br />
			<ButtonBack />
			<ProductCardListWithQuery
				title='Избранные'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
		</>
	);
});
