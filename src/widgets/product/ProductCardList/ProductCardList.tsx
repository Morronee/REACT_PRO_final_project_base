import s from './ProductCardList.module.css';
import { ProductCard, type Product } from 'entities/product';

type CardListProps = {
	title: string;
	products: Product[];
};
export const ProductCardList = ({ title, products }: CardListProps) => {
	if (!products.length) {
		return <h1 className='header-title'>Товар не найден</h1>;
	}

	return (
		<div className={s['card-list']}>
			<div className={s['card-list__header']}>
				<h2 className={s['card-list__title']}>{title}</h2>
			</div>
			<div className={s['card-list__items']}>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};
