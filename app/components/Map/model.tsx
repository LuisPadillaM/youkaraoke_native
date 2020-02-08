import {ViewStyle} from 'react-native'
import {Location, LocationCoordinate} from '../../models/location'

export interface MapMarkerItem {
  title: string,
  location: Location
}

export interface MapProps {
  items: Array<MapMarkerItem>
  userLocation: LocationCoordinate
  coordinates: LocationCoordinate[]
  isConnected: boolean
}

export interface MapStyle {
  containerWrapper: ViewStyle
  map: ViewStyle
}
