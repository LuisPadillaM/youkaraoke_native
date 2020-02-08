import React from 'react';
import {View} from 'react-native';
import {chooseImage, ImagePickerFileResponse} from '../../helpers/images';
import {Avatar, Button, Subheading, TextInput} from 'react-native-paper';

interface SettingsState {
  email: string;
  name: string;
  profilePic: string;
  surname: string;
}
const Settings = () => {
  const [settingsState, setSettingsState] = React.useState<SettingsState>({
    email: '',
    name: '',
    profilePic: '',
    surname: '',
  });
  const handleField = (name: string, value: any) => {
    setSettingsState({
      ...settingsState,
      [name]: value,
    });
  };
  const onChooseImage = () => {
    chooseImage().then(({fileUri}: ImagePickerFileResponse) => {
      handleField('profilePic', fileUri);
    });
  };
  return (
    <View>
      <Avatar.Image size={24} source={{uri: settingsState.profilePic}} />
      <Button icon="camera" mode="contained" onPress={onChooseImage}>
        Change photo
      </Button>
      <Subheading>Your Info</Subheading>
      <TextInput
        label="Name"
        value={settingsState.name}
        onChangeText={name => handleField('name', name)}
      />
      <TextInput
        label="Surname"
        value={settingsState.surname}
        onChangeText={surname => handleField('surname', surname)}
      />
      <Subheading>Account</Subheading>
      <TextInput
        label="Email"
        value={settingsState.email}
        onChangeText={email => handleField('email', email)}
      />
    </View>
  );
};

export default Settings;
