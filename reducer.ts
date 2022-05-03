import { initialState } from './src/app/initialState';

export const selezionaUtente = (state = initialState, action) => {
  switch (action.type) {
    case 'Utente_Corrente':
      return { ...state, selectedUser: action.user };
  }
  return state;
};
