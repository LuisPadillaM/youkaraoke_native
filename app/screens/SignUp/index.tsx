import React from 'react';
import {View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

interface SignUpState {
  email: string;
  name: string;
  surname: string;
}

const SignUp = () => {
  const [formState, setFormState] = React.useState<SignUpState>({
    email: '',
    name: '',
    surname: '',
  });
  const setField = (field: {[key: string]: any}) => {
    setFormState({...formState, ...field});
  };
  return (
    <View>
      <Text>SignUp Screen</Text>
      <TextInput
        label="Email"
        value={formState.email}
        onChangeText={email => setField({email})}
      />
      <TextInput
        label="Name"
        value={formState.name}
        onChangeText={name => setField({name})}
      />
      <TextInput
        label="Surname"
        value={formState.surname}
        onChangeText={surname => setField({surname})}
      />
      <Button>Register</Button>
    </View>
  );
};

export default SignUp;
