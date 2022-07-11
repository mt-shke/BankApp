import {TCategory} from '../types';

export interface IUser {
  user: IUserData;
}

export interface IUserData {
  _id: string;
  user?: string;
  firstname: string;
  lastname: string;
  incomes: IPayment[];
  expenses: IPayment[];
}

export interface IPayment {
  firstname?: string;
  lastname?: string;
  category: TCategory;
  date: string;
  amount: number;
  comments: string;
  _id_income?: string;
  _id_expense?: string;
}
