import { type FC, type PropsWithChildren, useState } from 'react';
import type { CartProduct } from 'entities/product';
import { useDeleteCartProduct } from 'features/cart/delete-cart-product';
import { Dialog } from 'shared/ui/Dialog';

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

	const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

	return (
		<>
			<button className={className} onClick={() => setIsOpenDialog(true)}>
				{children}
			</button>

			<Dialog
				isOpen={isOpenDialog}
				onClose={() => setIsOpenDialog(false)}
				onConfirm={deleteCartProduct}
				title={'Точно убрать из корзины?'}
			/>
		</>
	);
};
