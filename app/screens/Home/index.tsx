import React from 'react';
import {View} from 'react-native';
import {Headline, Subheading, TextInput} from 'react-native-paper';

interface HomeState {
  search: string;
}
const Home = () => {
  const [homeState, setHomeState] = React.useState<HomeState>({
    search: '',
  });
  return (
    <View>
      <TextInput
        label="Search"
        value={homeState.search}
        onChangeText={search => setHomeState({search})}
      />
      <View>
        <Headline>What are you looking for?</Headline>
        <Subheading>
          Find your favourite artists, songs, albums or inspiring playlist. Just
          start typing!
        </Subheading>
      </View>
      <View>
        <Headline>Collections Made for You</Headline>
      </View>
    </View>
  );
};

export default Home;
