import { WithProtection } from 'shared/store/HOCs/WithProtection.tsx';
import { WithQuery } from 'shared/store/HOCs/WithQuery.tsx';
import { useProducts } from 'shared/store/hooks/useProducts.ts';
import { ButtonBack } from 'shared/ui/ButtonBack';
import { ProductCardList } from 'widgets/product';

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
