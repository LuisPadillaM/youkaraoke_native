import React from 'react';
import {Button, List} from 'react-native-paper';
import {View} from 'react-native';

const GenderTastes = () => {
  const title = 'How would you describe your taste?';
  const subTitle =
    "Tell us what music are you into and we’ll find stuff that's right for you!";
  const tastes = ['Blues', 'Classical', 'Country', 'Dance'];
  return (
    <View>
      <List.Section title={title}>
        <List.Subheader>{subTitle}</List.Subheader>
        {tastes.map(taste => (
          <List.Item title={taste} />
        ))}
      </List.Section>
      <Button>Skip</Button>
      <Button>Continue</Button>
    </View>
  );
};

export default GenderTastes;
