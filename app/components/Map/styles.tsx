import {StyleSheet} from 'react-native'
import {MapStyle} from './model'

const MapStyles = StyleSheet.create<MapStyle>({
  containerWrapper: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default MapStyles
