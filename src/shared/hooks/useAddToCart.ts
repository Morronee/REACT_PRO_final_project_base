import { cartActions } from '../store/slices/cart';
import { useAppDispatch } from '../store/utils';
import type { CartProduct } from 'entities/product';

export const useAddToCart = () => {
	const dispatch = useAppDispatch();
	const addProductToCart = (cartProduct: CartProduct) => {
		dispatch(cartActions.addCartProduct(cartProduct));
	};

	return { addProductToCart };
};
