import s from './ToggleLikeButton.module.css';
import LikeSvg from '../../../../shared/assets/icons/like.svg?react';
import classNames from 'classnames';
import {
	useSetLikeProductMutation,
	useDeleteLikeProductMutation,
} from 'entities/product/api';
import { toast } from 'react-toastify';
import type { IErrorResponse, Product } from 'entities/product';
import { userSelectors } from 'entities/user';
import { useAppSelector } from 'shared/hooks';
import { memo } from 'react';

type TLikeButtonProps = {
	product: Product;
};
export const ToggleLikeButton = memo(({ product }: TLikeButtonProps) => {
	const accessToken = useAppSelector(userSelectors.getAccessToken);
	const user = useAppSelector(userSelectors.getUser);

	const [setLike] = useSetLikeProductMutation();
	const [deleteLike] = useDeleteLikeProductMutation();

	const isLike = product?.likes.some((l) => l.userId === user?.id);

	const toggleLike = async () => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы');
			return;
		}
		let response;
		if (isLike) {
			response = await deleteLike({ id: `${product.id}` });
		} else {
			response = await setLike({ id: `${product.id}` });
		}

		if (response.error) {
			const error = response.error as IErrorResponse;
			toast.error(error.data.message);
		}
	};

	return (
		<button
			className={classNames(s['card__favorite'], {
				[s['card__favorite_is-active']]: isLike,
			})}
			onClick={toggleLike}>
			<LikeSvg />
		</button>
	);
});

ToggleLikeButton.displayName = 'ToggleLikeButton';
