import { useAddToCart } from 'features/cart/add-to-cart';
import type { Product } from 'entities/product';
import { useCallback } from 'react';

interface IProps {
	product: Product;
	isProductInCart?: boolean;
	count?: number;
	classNames?: string;
}

export const AddToCartButton = ({
	product,
	isProductInCart = false,
	count = 1,
	classNames,
}: IProps) => {
	const { addProductToCart } = useAddToCart();

	const handleAddProductToCart = useCallback(() => {
		addProductToCart({ ...product, count });
	}, [addProductToCart, count, product]);

	return (
		<button
			onClick={handleAddProductToCart}
			disabled={isProductInCart}
			className={classNames}>
			В корзину
		</button>
	);
};
