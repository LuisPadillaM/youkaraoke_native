import React from 'react';
import {View, Text} from 'react-native';
import {Button, Checkbox, Headline, TextInput} from 'react-native-paper';

interface SignInState {
  username: string;
  password: string;
  rememberMe: boolean;
}

const SignIn = () => {
  const [formState, setFormState] = React.useState<SignInState>({
    username: '',
    password: '',
    rememberMe: false,
  });
  const setField = (field: {[key: string]: any}) => {
    setFormState({...formState, ...field});
  };
  return (
    <View>
      <Button>Sign Up</Button>
      <Headline>Sign In</Headline>
      <Text>
        Sign in with youremail or user name. Don’t remember your user name or
        password?
      </Text>
      <TextInput
        label="Email/Username"
        value={formState.username}
        onChangeText={username => setField({username})}
      />
      <TextInput
        label="password"
        value={formState.password}
        onChangeText={password => setField({password})}
      />
      <Checkbox
        status={formState.rememberMe ? 'checked' : 'unchecked'}
        onPress={() => setField({rememberMe: !formState.rememberMe})}>
        Remember me
      </Checkbox>
      <Button>Login</Button>
    </View>
  );
};

export default SignIn;
