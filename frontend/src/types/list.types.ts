
export interface IListResponse {
  id: string,
  label: string
}

export type TypeListFormState = Partial<Omit<IListResponse, 'id' | 'updateAt' >>;