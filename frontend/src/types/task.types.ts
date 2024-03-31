
import { IBase } from './root.types';
import { Priority } from '../data/tasks';
export enum EnumTaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high'
}

export const priorities = [EnumTaskPriority.low, EnumTaskPriority.medium, EnumTaskPriority.high]


export interface ITaskResponse extends IBase {
  name: string
  priority?: EnumTaskPriority
  description: string
  status: string
  dueDate: string
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updateAt' >>;