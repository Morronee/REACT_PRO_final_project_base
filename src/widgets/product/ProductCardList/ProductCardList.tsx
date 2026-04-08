import s from './ProductCardList.module.css';
import { ProductCard, type Product } from 'entities/product';
import { CartCounter, cartSelectors } from 'entities/cart';
import { AddToCartButton } from 'features/cart/add-to-cart';
import classNames from 'classnames';
import { useAppSelector } from 'shared/store/utils.ts';
import { ToggleLikeButton } from 'features/product/toggle-like';

type CardListProps = {
	title: string;
	products: Product[];
};
export const ProductCardList = ({ title, products }: CardListProps) => {
	const cartProducts = useAppSelector(cartSelectors.getCartProducts);

	if (!products.length) {
		return <h1 className='header-title'>Товар не найден</h1>;
	}

	return (
		<div className={s['card-list']}>
			<div className={s['card-list__header']}>
				<h2 className={s['card-list__title']}>{title}</h2>
			</div>
			<div className={s['card-list__items']}>
				{products.map((product) => {
					const isProductInCart = cartProducts.some((p) => p.id === product.id);

					return (
						<ProductCard
							key={product.id}
							product={product}
							likeSlot={<ToggleLikeButton product={product} />}
							cartSlot={
								isProductInCart ? (
									<CartCounter productId={product.id} />
								) : (
									<AddToCartButton
										product={product}
										isProductInCart={isProductInCart}
										classNames={classNames(
											s['card__cart'],
											s['card__btn'],
											s['card__btn_type_primary']
										)}
									/>
								)
							}
						/>
					);
				})}
			</div>
		</div>
	);
};
