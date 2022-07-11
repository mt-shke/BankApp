import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export interface IInputProps {
  name: string;
  label?: string;
  error:
    | {
        message: string | undefined;
        ref: string | undefined;
        type: 'required';
      }
    | undefined;
  control: Control;
  keyboard?: 'email-address' | 'numeric';
}

const Input: React.FC<IInputProps> = ({
  name,
  label,
  error,
  control,
  keyboard,
}) => {
  return (
    <View style={styles.containerInput}>
      <Text>{label}</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType={keyboard ?? 'default'}
          />
        )}
        name={name}
      />
      {error && <Text style={styles.error}>{`${error.message}`}</Text>}
    </View>
  );
};

export default Input;

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
  error: {
    color: 'red',
    fontSize: 12,
    position: 'absolute',
    right: 0,
    fontStyle: 'italic',
  },
});
