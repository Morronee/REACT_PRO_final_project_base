import classNames from 'classnames';
import s from './ProductCard.module.css';
import { ProductPrice } from 'entities/product/ui/ProductPrice/ProductPrice.tsx';
import { Link } from 'react-router-dom';
import type { Product } from 'entities/product';
import { useAppSelector } from 'shared/store/utils.ts';
import { LikeButton } from 'shared/ui/LikeButton';
import { CartCounter, cartSelectors } from 'entities/cart';
import { AddToCartButton } from 'features/cart/add-to-cart';

type CardProps = {
	product: Product;
};
export const ProductCard = ({ product }: CardProps) => {
	const { discount, price, name, tags, id, images } = product;
	const cartProducts = useAppSelector(cartSelectors.getCartProducts);
	const isProductInCart = cartProducts.some((p) => p.id === id);

	return (
		<article className={s['card']}>
			<div
				className={classNames(
					s['card__sticky'],
					s['card__sticky_type_top-left']
				)}>
				<span className={s['card__discount']}>{discount}</span>
				{tags.length > 0 &&
					tags.map((t) => (
						<span key={t} className={classNames(s['tag'], s['tag_type_new'])}>
							{t}
						</span>
					))}
			</div>
			<div
				className={classNames(
					s['card__sticky'],
					s['card__sticky_type_top-right']
				)}>
				<LikeButton product={product} />
			</div>
			<Link className={s['card__link']} to={`/products/${id}`}>
				<img
					src={images}
					alt={name}
					className={s['card__image']}
					loading='lazy'
				/>
				<div className={s['card__desc']}>
					<ProductPrice price={price} discountPrice={discount} />
					<h3 className={s['card__name']}>{name}</h3>
				</div>
			</Link>
			{isProductInCart ? (
				<CartCounter productId={id} />
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
			)}
		</article>
	);
};
