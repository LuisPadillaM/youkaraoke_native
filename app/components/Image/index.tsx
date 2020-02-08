import React from 'react';
import {Image as NativeImage, ImageSourcePropType} from 'react-native';

interface ImageProps {
  image?: ImageSourcePropType;
  width?: number | string;
  height?: number | string;
}

const Image = (props: ImageProps) => {
  const defaultProps = {
    image: props.image || require('../../assets/images/placeholder.jpg'),
    size: {
      height: props.height || 30,
      width: props.width || 30,
    },
  };
  return <NativeImage style={defaultProps.size} source={defaultProps.image} />;
};

export default Image;
