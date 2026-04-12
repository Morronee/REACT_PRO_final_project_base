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
import { memo, useEffect, useOptimistic, useState, useTransition } from 'react';

type TLikeButtonProps = {
	product: Product;
};
export const ToggleLikeButton = memo(({ product }: TLikeButtonProps) => {
	const accessToken = useAppSelector(userSelectors.getAccessToken);
	const user = useAppSelector(userSelectors.getUser);

	const [setLike] = useSetLikeProductMutation();
	const [deleteLike] = useDeleteLikeProductMutation();
	const [isPending, startTransition] = useTransition();

	const likedFromServer = product.likes.some((l) => l.userId === user?.id);
	const [stickyLiked, setStickyLiked] = useState<boolean | null>(null);

	useEffect(() => {
		setStickyLiked(null);
	}, [product.id]);

	useEffect(() => {
		if (stickyLiked !== null && stickyLiked === likedFromServer) {
			setStickyLiked(null);
		}
	}, [likedFromServer, stickyLiked]);

	const committedLiked = stickyLiked !== null ? stickyLiked : likedFromServer;

	const [isLiked, setOptimisticLiked] = useOptimistic(
		committedLiked,
		(_committed, next: boolean) => next
	);

	const toggleLike = () => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы');
			return;
		}
		const displayed = stickyLiked !== null ? stickyLiked : likedFromServer;
		const nextLiked = !displayed;
		startTransition(async () => {
			setOptimisticLiked(nextLiked);
			const response = nextLiked
				? await setLike({ id: `${product.id}` })
				: await deleteLike({ id: `${product.id}` });

			if (response.error) {
				const error = response.error as IErrorResponse;
				toast.error(error.data.message);
				setStickyLiked(null);
				return;
			}
			setStickyLiked(nextLiked);
		});
	};

	return (
		<button
			type='button'
			disabled={isPending}
			className={classNames(s['card__favorite'], {
				[s['card__favorite_is-active']]: isLiked,
			})}
			onClick={toggleLike}>
			<LikeSvg />
		</button>
	);
});

ToggleLikeButton.displayName = 'ToggleLikeButton';
