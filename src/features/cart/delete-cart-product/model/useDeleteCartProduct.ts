import { cartActions } from 'entities/cart';
import { useDispatch } from 'react-redux';
import type { CartProduct } from 'entities/product';

export const useDeleteCartProduct = (id: CartProduct['id']) => {
	const dispatch = useDispatch();

	const deleteCartProduct = () => {
		dispatch(cartActions.deleteCartProduct(id));
	};

	return { deleteCartProduct };
};
