import classNames from 'classnames';
import s from './CounterInput.module.css';

interface IProps {
	count: number;
	handleDecrement: () => void;
	handleSetCount: React.ChangeEventHandler<HTMLInputElement>;
	handleIncrement: () => void;
	disabled?: boolean;
}

export const CounterInput = ({
	count,
	handleSetCount,
	handleIncrement,
	handleDecrement,
	disabled,
}: IProps) => {
	return (
		<div className={classNames(s['button-count'])}>
			<button
				onClick={handleDecrement}
				className={classNames(s['button-count__minus'])}>
				-
			</button>
			<input
				onChange={handleSetCount}
				type='number'
				className={classNames(s['button-count__num'])}
				value={count}
			/>
			<button
				onClick={handleIncrement}
				className={classNames(s['button-count__plus'])}
				disabled={disabled}>
				+
			</button>
		</div>
	);
};
