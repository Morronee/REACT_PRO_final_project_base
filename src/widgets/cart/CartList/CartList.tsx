import s from './CartList.module.css';
import classNames from 'classnames';
import type { CartProduct } from 'entities/product';
import { CartItem } from 'widgets/cart';

type CartListProps = {
	products: CartProduct[];
};
export const CartList = ({ products }: CartListProps) => {
	return (
		<div className={classNames(s['cart-list'])}>
			{products.map((p) => (
				<CartItem product={p} key={p.id} />
			))}
		</div>
	);
};
