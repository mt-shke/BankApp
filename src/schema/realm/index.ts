export const UserSchema = {
  name: 'User',
  primaryKey: '_id',
  properties: {
    _id: 'string',
    user: 'string',
    incomes: 'Payment[]',
    expenses: 'Payment[]',
  },
};

export const PaymentSchema = {
  name: 'Payment',
  embedded: true,
  properties: {
    date: 'string',
    amount: 'int',
    category: 'string',
    comments: {type: 'string?', default: ''},
    _id_income: 'string?',
    _id_expense: 'string?',
    firstname: 'string?',
    lastname: 'string?',
  },
};
