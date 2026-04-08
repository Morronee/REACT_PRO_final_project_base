import classNames from 'classnames';
import s from './ProductCard.module.css';
import { ProductPrice } from 'entities/product/ui/ProductPrice/ProductPrice.tsx';
import { Link } from 'react-router-dom';
import type { Product } from 'entities/product';
import type { ReactNode } from 'react';

type CardProps = {
	product: Product;
	likeSlot?: ReactNode;
	cartSlot?: ReactNode;
};
export const ProductCard = ({ product, likeSlot, cartSlot }: CardProps) => {
	const { discount, price, name, tags, id, images } = product;


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
				{likeSlot}
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
			{cartSlot}
		</article>
	);
};
