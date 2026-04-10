import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Modal } from 'shared/ui/Modal';
import s from './Dialog.module.css';

interface DialogProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children?: React.ReactNode;
	onConfirm?: () => void;
	onCancel?: () => void;
	confirmText?: string;
	cancelText?: string;
	hideActions?: boolean;
	disableConfirm?: boolean;
	disableCancel?: boolean;
}

export const Dialog = ({
	isOpen,
	onClose,
	title,
	children,
	onConfirm,
	onCancel,
	confirmText = 'Подтвердить',
	cancelText = 'Отмена',
	hideActions = false,
	disableConfirm = false,
	disableCancel = false,
}: DialogProps) => {
	const surfaceRef = useRef<HTMLDivElement>(null);
	const previousActiveElementRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		previousActiveElementRef.current = document.activeElement as HTMLElement;
		requestAnimationFrame(() => {
			surfaceRef.current?.focus();
		});

		return () => {
			previousActiveElementRef.current?.focus();
		};
	}, [isOpen]);

	const handleCancel = () => {
		onCancel?.();
		onClose();
	};

	const handleConfirm = () => {
		onConfirm?.();
		onClose();
	};


	const handleOnClickBlur = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target !== e.currentTarget) return;
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={s['dialog']} onClick={handleOnClickBlur}>
				<div
					ref={surfaceRef}
					className={s['dialog__surface']}
					role='document'
					tabIndex={-1}>
					<h2 className={s['dialog__title']}>{title}</h2>
					{children && <div className={s['dialog__content']}>{children}</div>}

					{!hideActions && (
						<div className={s['dialog__actions']}>
							<button
								className={classNames(
									s['dialog__button'],
									s['dialog__button_type_secondary']
								)}
								onClick={handleCancel}
								disabled={disableCancel}>
								{cancelText}
							</button>
							<button
								className={classNames(
									s['dialog__button'],
									s['dialog__button_type_primary']
								)}
								onClick={handleConfirm}
								disabled={disableConfirm}>
								{confirmText}
							</button>
						</div>
					)}
				</div>
			</div>
		</Modal>
	);
};

