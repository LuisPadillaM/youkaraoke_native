import Permissions, {Permission, RESULTS, PERMISSIONS} from 'react-native-permissions';
import {isIOS} from '../helpers'

export enum permissionResult {
  UNAVAILABLE = 'unavailable',
  DENIED = 'denied',
  BLOCKED = 'blocked',
  GRANTED = 'granted'
}
export const locationPermission =isIOS ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE

export const requestPermission = (permission: Permission) => {
  return new Promise((resolve, reject) => {
    Permissions.request(permission)
      .then((reply: RESULTS) => resolve(reply))
      .catch((err) => reject(err))
  })
}

export const checkPermission = (permission: Permission) => {
  return new Promise((resolve, reject) => {
    Permissions.check(permission)
      .then((reply: RESULTS) => resolve(reply))
      .catch((err) => reject(err))
  })
}
