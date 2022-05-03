import { actionType } from './actionType';
import { User } from './src/app/user';

export const scegliUtente = (user: User) => {
  return {
    type: actionType.Utente_Corrente,
    user,
  };
};
