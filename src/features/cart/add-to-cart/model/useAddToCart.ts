import type { CartProduct } from 'entities/product';
import { cartActions } from 'entities/cart';
import { useAppDispatch } from 'shared/hooks';

export const useAddToCart = () => {
	const dispatch = useAppDispatch();
	const addProductToCart = (cartProduct: CartProduct) => {
		dispatch(cartActions.addCartProduct(cartProduct));
	};

	return { addProductToCart };
};
