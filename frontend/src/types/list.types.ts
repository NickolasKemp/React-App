import { IBase } from './root.types';

export interface IListResponse extends IBase {
  id: string,
  label: string
}

export type TypeListFormState = Partial<Omit<IListResponse, 'id' | 'updateAt' >>;