import React from 'react';
import {View} from 'react-native';

interface SearchPlacesState {
  address: string;
}

const SearchPlaces = () => {
  const [searchPlacesState, setSearchPlacesState] = React.useState<
    SearchPlacesState
  >({
    address: '',
  });
  const handleChange = (address: string) => setSearchPlacesState({address});
  const handleSelect = (address: string) => {
  };
  const autoCompleteOptions = {
    placeholder: 'Search parties around you',
    minLength: 6,
  };
  return (
    <View
    />
  );
};

export default SearchPlaces;
