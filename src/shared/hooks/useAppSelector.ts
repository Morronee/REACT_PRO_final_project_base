import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from 'app/providers/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;