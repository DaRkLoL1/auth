import * as NS from '../../namespace';

export function setUser(user: string): NS.ISetUser {
  return { type: 'AUTHORIZATION:SET_USER', payload: user };
}

export function clearUser(): NS.IClearUser {
  return { type: 'AUTHORIZATION:CLEAR_USER' };
}
