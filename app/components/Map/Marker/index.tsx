import React from 'react'
import {Marker} from 'react-native-maps'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Location} from '../../../models/location';

export interface MapMarkerProps {
  location: Location
  id: string,
  title: string
  index: number
}

const MapMarker = (props: MapMarkerProps) => {
  const {title, location, id} = props

  if (!location || !location.attributes) {
    return null
  }
  const {attributes} = location
  const address = `${attributes.address1} ${attributes.address2},` +
    ` ${attributes.city} ${attributes.zip_code}`
  const latLong = {
    latitude: attributes.latitude,
    longitude: attributes.longitude,
  }

  return (
    <Marker
      flat
      coordinate={latLong}
      identifier={id}
      title={title}
      description={address}
    >
      <FontAwesomeIcon  icon={'map-marker-alt'} index={props.index} />
    </Marker>
  )
}

export default MapMarker
