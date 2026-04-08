import { useAddToCart } from 'features/cart/add-to-cart';
import type { Product } from 'entities/product';

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

	return (
		<button
			onClick={() => addProductToCart({ ...product, count })}
			disabled={isProductInCart}
			className={classNames}>
			В корзину
		</button>
	);
};
