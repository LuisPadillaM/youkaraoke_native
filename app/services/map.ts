import Geolocation, {GeolocationError, GeolocationResponse} from '@react-native-community/geolocation'
import {Location, LocationCoordinate, UserLocationResponse} from '../models/location'

export const getUserLocation = (): Promise<UserLocationResponse> => (
  new Promise((resolve) => (
    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => (resolve({error: false, position})),
      (error: GeolocationError) => (resolve({error: true, message: error.message})),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    )
  ))
)

export const getCoordinates = (location: Location): LocationCoordinate => ({
  latitude:  location && location.attributes ? location.attributes.latitude : 0,
  longitude: location && location.attributes ? location.attributes.longitude : 0,
})
