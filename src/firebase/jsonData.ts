import {convertAmount} from '../utils';

export const convertJsonUserData = (user: any) => {
  return {
    _id: user._id,
    user: user.user,
    incomes: user.incomes.map(income => ({
      date: income.date,
      amount: convertAmount(income.amount),
      category: income.category,
      comments: income.comments,
      _id_income: income._id_income,
    })),
    expenses: user.expenses.map(expense => ({
      date: expense.date,
      amount: convertAmount(expense.amount),
      category: expense.category,
      comments: expense.comments,
      _id_expense: expense._id_expense,
    })),
  };
};
