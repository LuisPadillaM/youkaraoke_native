
import React from 'react';
import {Button, Avatar, Headline, Subheading} from 'react-native-paper';
import {View} from 'react-native';

const ArtistsTastes = () => {
  const title = 'Tell us what you like';
  const subTitle =
    "Tell us what music are you into and we’ll find stuff that's right for you!";
  const artistsTastes = ['https://placeimg.com/40/40/people', 'https://placeimg.com/40/40/people', 'https://placeimg.com/40/40/people', 'https://placeimg.com/40/40/people'];
  return (
    <View>
      <Headline>{title}</Headline>
      <Subheading>{subTitle}</Subheading>
      {artistsTastes.map(artistTaste => (
        <Avatar size={24} source={{uri: artistTaste}} />
      ))}
      <Button>Skip</Button>
      <Button>Continue</Button>
    </View>
  );
};

export default ArtistsTastes;
