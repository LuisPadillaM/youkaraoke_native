import React from 'react';
import {Platform, View} from 'react-native';
import {Headline, TextInput} from 'react-native-paper';
import {PermissionStatus} from 'react-native-permissions'
import {PartiesProps} from './model'
import {checkPermission, locationPermission, permissionResult, requestPermission} from '../../services/permissions'
import Map from '../../components/Map';

interface PartiesState {
  search: string;
}


const Parties = (props:PartiesProps) => {
  const {setUserLocation} = props
  const [partiesState, setPartiesState] = React.useState<PartiesState>({
    search: '',
  });
  const requestLocationPermission = () => {
    requestPermission(locationPermission)
      .then((reply: string) => {
      if (reply === permissionResult.GRANTED) {
        setUserLocation()
      } else {
        // snackbar
      }
    })
  }

  const checkLocationPermission = () => {
    checkPermission(locationPermission)
      .then((response: PermissionStatus) => {
      if (response === permissionResult.GRANTED) {
        this.props.setUserLocation()
      } else if (response === permissionResult.BLOCKED) {
        requestLocationPermission()
      } else {
        // show snackbar message
      }
    })
  }

  return (
    <View>
      <Headline>Parties around you</Headline>
      <TextInput
        label="Search"
        value={partiesState.search}
        onChangeText={search => setPartiesState({search})}
      />
      <Map />
    </View>
  );
};

export default Parties;
