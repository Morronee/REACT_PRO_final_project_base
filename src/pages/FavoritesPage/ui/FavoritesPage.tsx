import { WithQuery } from 'features/common/query-state';
import { ButtonBack } from 'shared/ui/ButtonBack';
import { ProductCardList } from 'widgets/product';
import { WithProtection } from 'features/auth/guard';
import { useFavoriteProducts } from 'features/product/favorites';

const ProductCardListWithQuery = WithQuery(ProductCardList);

export const FavoritesPage = WithProtection(() => {
	const { isLoading, isError, products, error } = useFavoriteProducts();

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
