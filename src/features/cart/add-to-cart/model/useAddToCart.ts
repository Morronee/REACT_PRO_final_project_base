import { useAppDispatch } from 'app/providers/store/lib/utils.ts';
import type { CartProduct } from 'entities/product';
import { cartActions } from 'entities/cart';

export const useAddToCart = () => {
	const dispatch = useAppDispatch();
	const addProductToCart = (cartProduct: CartProduct) => {
		dispatch(cartActions.addCartProduct(cartProduct));
	};

	return { addProductToCart };
};