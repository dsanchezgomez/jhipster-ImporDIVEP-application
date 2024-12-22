import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 25864,
  login: 'C',
};

export const sampleWithPartialData: IUser = {
  id: 8945,
  login: 'r9',
};

export const sampleWithFullData: IUser = {
  id: 21428,
  login: '_@IE7\\FcI',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
