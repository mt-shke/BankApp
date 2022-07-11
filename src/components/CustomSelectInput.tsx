import {useState} from 'react';
import {Control, Controller} from 'react-hook-form';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import React from 'react';

interface ICustomSelectInputProps {
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
  options: string[];
}

const CustomSelectInput: React.FC<ICustomSelectInputProps> = ({
  name,
  label,
  error,
  control,
  options,
}) => {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.label,
        }}>
        {label}
      </Text>
      <View style={styles.containerInput}>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, value}}) => (
            <View>
              <Pressable onPress={() => setModal(p => !p)}>
                <Text style={styles.input}>{value}</Text>
              </Pressable>
              {modal && (
                <SelectOptionsModal
                  options={options}
                  setModal={setModal}
                  setValue={onChange}
                />
              )}
            </View>
          )}
          name={name}
        />
      </View>
      {error && <Text style={styles.error}>{`${error.message}`}</Text>}
    </View>
  );
};

export default CustomSelectInput;

interface ISelectOptionsModal {
  options: string[];
  setValue: (option: string) => void;
  setModal: (boolean: boolean) => void;
}

const SelectOptionsModal: React.FC<ISelectOptionsModal> = ({
  options,
  setValue,
  setModal,
}) => {
  const pickValue = (option: string) => {
    setValue(option);
    setModal(false);
  };

  return (
    <View style={styles.containerModal}>
      {options.map((option, index) => (
        <Pressable onPress={() => pickValue(option)} key={index}>
          <View
            style={{
              ...styles.select,
              borderTopWidth: index === 0 ? 1 : 0,
            }}>
            <Text style={styles.selectText}>{option}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  // Select Input
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    // fontFamily: globalStyles.fontGrobold,
  },
  containerInput: {
    position: 'relative',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    // fontFamily: globalStyles.fontBangers,
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    right: 0,
    padding: 12,
  },

  // Modal
  containerModal: {
    position: 'absolute',
    width: '100%',
    top: 0,
    zIndex: 11,
    // backgroundColor: colors.background,
    backgroundColor: 'white',
  },
  select: {
    borderColor: 'black',
    borderWidth: 2,
  },
  selectText: {
    padding: 10,
    // fontFamily: globalStyles.fontBangers,
    letterSpacing: 1,
  },
  error: {
    color: 'red',
    fontSize: 12,
    position: 'absolute',
    right: 0,
    fontStyle: 'italic',
  },
});
