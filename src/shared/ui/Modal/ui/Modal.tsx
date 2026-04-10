import { useEffect } from 'react';
import { Portal } from 'shared/ui/Portal';
import s from './Modal.module.css';

interface SimpleModalProps {
	isOpen: boolean;
	onClose: () => void;
	onEnter?: () => void;
	children: React.ReactNode;
	closeOnOverlayClick?: boolean;
	closeOnEscape?: boolean;
}

export const Modal = ({
	isOpen,
	onEnter,
	onClose,
	children,
	closeOnOverlayClick = true,
	closeOnEscape = true,
}: SimpleModalProps) => {
	// Закрытие по Escape
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && closeOnEscape && isOpen) {
				onClose();
			}
		};

		const handleOnEnter = (e: KeyboardEvent) => {
			if (e.key === 'Enter' && onEnter && isOpen) {
				onEnter();
			}
		};

		if (isOpen) {
			document.addEventListener('keyup', handleEscape);
			document.body.style.overflow = 'hidden';
			onEnter && document.addEventListener('keyup', handleOnEnter);
		}

		return () => {
			document.removeEventListener('keyup', handleEscape);
			document.removeEventListener('keyup', handleOnEnter);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose, closeOnEscape, onEnter]);

	if (!isOpen) return null;

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (closeOnOverlayClick && e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<Portal id='modal-root'>
			<div
				className={s['modal']}
				onClick={handleOverlayClick}
				role='dialog'
				aria-modal='true'>
				{children}
			</div>
		</Portal>
	);
};
