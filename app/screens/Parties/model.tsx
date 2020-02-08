import {LocationCoordinate} from '../../models/location'

export interface PartiesStateProps {
  coordinates: LocationCoordinate[]
  isConnected: boolean
  userLocation: LocationCoordinate
}

export interface PartiesDispatchProps {
  setUserLocation: () => void
}

export type PartiesProps = PartiesDispatchProps & PartiesStateProps
