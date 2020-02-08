import React from 'react';
import {connect} from 'react-redux'
import Parties from './index'
import {PartiesDispatchProps, PartiesStateProps} from './model'
import {LocationCoordinate} from '../../models/location'
import {currentUserLocation} from '../../actions/Map'
import {AppState} from '../../reducers'

export const getLocationCoordinates = (state: AppState['assess']): LocationCoordinate[] => {
  const assessments = state.dashboard.assessments
  const coordinates = []
  return coordinates
}


function mapStateToProps(state: AppState, ownProps: any): PartiesStateProps {
  return {
    coordinates: getLocationCoordinates(state.assess),
    isConnected: true,
    userLocation: state.globals.map.userLocation,
  }
}

function mapDispatchToProps(dispatch: (a: any) => void, ownProps: PartiesStateProps): PartiesDispatchProps {
  const setUserLocation = () => {
    dispatch(currentUserLocation())
  }
  return {
    setUserLocation
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Parties)
