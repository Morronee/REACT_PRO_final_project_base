// TODO не придумал как сделать лучше, как будто бы единственный компромис
import { store } from 'app/providers/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
