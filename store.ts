import { selezionaUtente } from './reducer';
import { configureStore as createStore } from '@reduxjs/toolkit';

export const store = createStore({ reducer: selezionaUtente });
