import React from 'react';
import {useForm} from 'react-hook-form';
import {View, StyleSheet, Button} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import Input from './Input';
import CustomSelectInput from './CustomSelectInput';
import {
  expensesCategory,
  expenseSchema,
  incomesCategory,
  incomeSchema,
} from '../schema/yup/payment';
import DateInput from './DateInput';
import {IPayment, IUserData} from '../ts/interfaces/user';
import {TExpenseScreenProps, TIncomeScreenProps} from '../ts/types';

interface IFormProps {
  schema: 'income' | 'expense';
  screenProps: TIncomeScreenProps | TExpenseScreenProps;
}

const Form: React.FC<IFormProps> = ({schema, screenProps}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema === 'expense' ? expenseSchema : incomeSchema),
  });
  const {navigation} = screenProps;
  const user: IUserData = users[0] as any;

  const submitForm = (data: IPayment) => {
    const loggedUser = realm.objectForPrimaryKey('User', user._id) as IUserData;
    const newPaymentId = new UUID().toHexString();
    if (schema === 'income') {
      const payment = {...data, _id_income: newPaymentId};
      realm.write(() => {
        loggedUser.incomes.push(payment);
      });
    }
    if (schema === 'expense') {
      const payment = {...data, _id_expense: newPaymentId};
      realm.write(() => {
        loggedUser.expenses.push(payment);
      });
    }
    navigation.navigate('HomeScreen');
  };

  const onSubmit = (data: IPayment) => submitForm(data);

  return (
    <View style={styles.container}>
      <Input
        control={control}
        name="firstname"
        error={errors.firstname}
        key="firstname"
        label={'First Name'}
      />
      <Input
        control={control}
        name="lastname"
        error={errors.lastname}
        key="lastname"
        label={'Last Name'}
      />
      <Input
        control={control}
        name="amount"
        error={errors.amount}
        key="amount"
        label={'Amount'}
        keyboard="numeric"
      />
      <DateInput
        control={control}
        name="date"
        error={errors.date}
        key="date"
        label={'Date'}
      />
      <Input
        control={control}
        name="comments"
        error={errors.comments}
        key="comments"
        label={'Commentaire'}
      />

      <CustomSelectInput
        control={control}
        name="category"
        error={errors.category}
        key="category"
        label={'Category'}
        options={schema === 'expense' ? expensesCategory : incomesCategory}
      />
      <Button title="submit" onPress={handleSubmit(onSubmit)} />
      {/* to fix */}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  containerInput: {},
  input: {
    backgroundColor: 'grey',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
});
