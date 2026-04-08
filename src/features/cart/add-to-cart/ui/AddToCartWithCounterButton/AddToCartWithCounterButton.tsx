import s from './AddToCartWithCounterButton.module.css';
import classNames from 'classnames';
import { type Product, useProductCount } from 'entities/product';
import { AddToCartButton } from 'features/cart/add-to-cart';

interface IProps {
	product: Product;
}
export const AddToCartWithCounterButton = ({ product }: IProps) => {
	const { count, handleCount, handleCountPlus, handleCountMinus } =
		useProductCount();

	return (
		<div className={classNames('product__btn-wrap')}>
			<div className={s['button-count']}>
				<button className={s['button-count__minus']} onClick={handleCountMinus}>
					-
				</button>
				<input
					type='number'
					className={s['button-count__num']}
					value={count}
					onChange={handleCount}
				/>
				<button className={s['button-count__plus']} onClick={handleCountPlus}>
					+
				</button>
			</div>
			<AddToCartButton
				product={product}
				count={count}
				classNames={classNames(s['button'], s['button_type_primary'])}
			/>
		</div>
	);
};
