import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {View} from 'react-native';
import styles from './styles';
import {MapMarkerItem, MapProps} from './model'
import Marker from './Marker'


const DEFAULT_PADDING = (size: number) => ({
  bottom: size,
  left: size,
  right: size,
  top: size,
})

class MapComponent extends React.PureComponent<MapProps, {}> {
  public static map:any = null
  render(){
    const {coordinates, isConnected, items} = this.props
    return (
      coordinates && coordinates.length ? <View style={styles.containerWrapper}>
        <MapView
          ref={(ref) => MapComponent.map = ref}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={isConnected}
          onMapReady={this.onMapReady}
          loadingEnabled
          followsUserLocation
        >
          {
            items.map((item: MapMarkerItem, index: number) => (
              <Marker
                key={item.location.id}
                id={item.location.id}
                index={index + 1}
                title={item.title}
                location={item.location}
              />
            ))
          }
        </MapView>
      </View> : null
    )
  }
  public onMapReady = () => {
    const {coordinates, isConnected, userLocation} = this.props
    if (isConnected && userLocation && userLocation.latitude) {
      coordinates.unshift(this.props.userLocation)
    }
    MapComponent.map.fitToCoordinates(coordinates, {
      animated: true,
      edgePadding: DEFAULT_PADDING(40),
    })
  }
}

export default MapComponent
