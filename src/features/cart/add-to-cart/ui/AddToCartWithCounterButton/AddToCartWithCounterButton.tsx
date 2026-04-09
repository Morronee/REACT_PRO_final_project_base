import s from './AddToCartWithCounterButton.module.css';
import classNames from 'classnames';
import { type Product, useProductCount } from 'entities/product';
import { AddToCartButton } from 'features/cart/add-to-cart';
import { CounterInput } from 'shared/ui/CounterInput';

interface IProps {
	product: Product;
}
export const AddToCartWithCounterButton = ({ product }: IProps) => {
	const { count, handleCount, handleCountPlus, handleCountMinus } =
		useProductCount();

	return (
		<div className={classNames('product__btn-wrap')}>
			<CounterInput
				count={count}
				handleDecrement={handleCountMinus}
				handleSetCount={handleCount}
				handleIncrement={handleCountPlus}
			/>
			<AddToCartButton
				product={product}
				count={count}
				classNames={classNames(s['button'], s['button_type_primary'])}
			/>
		</div>
	);
};
