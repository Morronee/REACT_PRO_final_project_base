import type { FC, PropsWithChildren } from 'react';
import type { CartProduct } from 'entities/product';
import { useDeleteCartProduct } from 'features/cart/delete-cart-product';

interface IProps {
	productid: CartProduct['id'];
	className?: string;
}

export const DeleteCartProductButton: FC<PropsWithChildren<IProps>> = ({
	children,
	productid,
	className,
}) => {
	const { deleteCartProduct } = useDeleteCartProduct(productid);

	return (
		<button className={className} onClick={deleteCartProduct}>
			{children}
		</button>
	);
};
