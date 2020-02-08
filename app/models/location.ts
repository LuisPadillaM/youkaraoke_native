import {GeolocationResponse} from '@react-native-community/geolocation'

export interface UserLocationResponse {
  error: boolean
  position?: GeolocationResponse
  message?: string
}
//
// export interface DistanceMatrixResponse {
//   error: boolean
//   results?: any
//   message?: string
// }
//
// export interface GeocodeResponse {
//   error: boolean
//   coordinates?: any
//   message?: string
// }

export interface LocationCoordinate {
  longitude: number
  latitude: number
  distance?: number
}

export interface Location {
  id: string,
  attributes: {
    address1: string,
    address2?: string,
    approximate?: boolean,
    city: string,
    state: string,
    county?: string,
    country?: string,
    zip_code?: string,
    latitude: number,
    longitude: number,
    noCoordinates?: boolean,
  }
}

// export interface EntityCoordinate {
//   coordinate: LocationCoordinate
//   id: string
// }
