import { useCartCount } from 'entities/cart/lib/useCartCount.ts';
import { CounterInput } from 'shared/ui/CounterInput';

type TCartCounter = {
	productId: string;
};
export const CartCounter = ({ productId }: TCartCounter) => {
	const { count, stock, handleSetCount, handleIncrement, handleDecrement } =
		useCartCount(productId);

	return (
		<CounterInput
			count={count}
			handleDecrement={handleDecrement}
			handleSetCount={handleSetCount}
			handleIncrement={handleIncrement}
			disabled={count >= stock}
		/>
	);
};
