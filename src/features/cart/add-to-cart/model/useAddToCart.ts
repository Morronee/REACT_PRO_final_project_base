import { useAppDispatch } from 'shared/store/utils.ts';
import type { CartProduct } from 'entities/product';
import { cartActions } from 'entities/cart';

export const useAddToCart = () => {
	const dispatch = useAppDispatch();
	const addProductToCart = (cartProduct: CartProduct) => {
		dispatch(cartActions.addCartProduct(cartProduct));
	};

	return { addProductToCart };
};