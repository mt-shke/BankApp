import {object, string, number, mixed} from 'yup';

export const expensesCategory = [
  'Alimentaire',
  'Factures',
  'Transport',
  'Logement',
  'Santé',
  'Divertissement',
  'Vacances',
  'Shopping',
];

export const incomesCategory = [
  'Salaire et assimilé',
  'Revenu financier',
  'Rente',
  'Pension alimentaire',
  'Allocation chômage',
  'Prestations sociales',
  'Revenu foncier',
  'Revenu exceptionnel',
  'Autre revenu',
];

export const incomeSchema = object().shape({
  firstname: string()
    .required('Firstname is missing')
    .max(40, 'Firstname is too long'),
  lastname: string().max(40, 'Lastname is too long'),
  amount: number()
    .typeError('Must be a number')
    .min(0.01, 'Minimum amount is 0,01')
    .max(999999, 'Maximum amount authorized is 999 999 €')
    .required('Amount is missing'),
  category: mixed()
    .required('Category is missing')
    .oneOf(Object.values(incomesCategory)),
  date: string().required('Date is missing'),
  comments: string(),
});

export const expenseSchema = object().shape({
  firstname: string()
    .required('Firstname is missing')
    .max(40, 'Firstname is too long'),
  lastname: string().max(40, 'Lastname is too long'),
  amount: number()
    .typeError('Must be a number')
    .min(0.01, 'Minimum amount is 0,01')
    .max(999999, 'Maximum amount authorized is 999 999 €')
    .required('Amount is missing'),
  category: mixed()
    .required('Category is missing')
    .oneOf(Object.values(expensesCategory)),
  date: string().required('Date is missing'),
  comments: string(),
});
