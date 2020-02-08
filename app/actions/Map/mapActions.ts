import {Dispatch} from 'redux'
import {ActionInterface} from '../actionInterface';
import ActionTypes from './actionTypes'
import {LocationCoordinate, UserLocationResponse} from '../../models/location'
import {getUserLocation} from '../../services/map'

export type UserLocationAction = ActionInterface<ActionTypes.GET_USER_LOCATION, LocationCoordinate>
export type UserLocationErrorAction = ActionInterface<ActionTypes.GET_USER_LOCATION_ERROR, {}>

export type Actions = UserLocationAction | UserLocationErrorAction

export const setUserLocation = (location: LocationCoordinate): UserLocationAction => ({
  payload: location,
  type: ActionTypes.GET_USER_LOCATION
})

export const userLocationError = (): UserLocationErrorAction => ({
  payload: {},
  type: ActionTypes.GET_USER_LOCATION_ERROR
})

export function currentUserLocation() {
  return async (dispatch: Dispatch<Actions>): Promise<Actions> => {
    const userLocation: UserLocationResponse = await getUserLocation()
    if (userLocation.error || !userLocation.position || !userLocation.position.coords) {
      return dispatch(userLocationError())
    } else {
      return dispatch(setUserLocation(userLocation.position.coords))
    }
  }
}


