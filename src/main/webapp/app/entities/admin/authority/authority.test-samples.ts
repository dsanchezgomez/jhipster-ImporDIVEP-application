import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '89e0a325-50b4-492d-bb67-8ec5dd09b48b',
};

export const sampleWithPartialData: IAuthority = {
  name: 'cfb44b2f-57e7-4591-a684-afa5e6b9214e',
};

export const sampleWithFullData: IAuthority = {
  name: '59a81825-3bc5-4874-ac83-f777c6d65718',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
