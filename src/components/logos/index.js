import React from 'react'
import {  appIcons ,appImages,appSvgs, responsiveWidth} from '../../services';
import * as Icons  from '../icons';

export const Primary = ({ size, width, height }) => {
  return (
    // <Icons.Svg
    // svg={appSvgs.logo}
    // size={size||responsiveWidth(50)}
    // />
    <Icons.Custom
    size={size}
    width={width}
    height={height}
    icon={appImages.logo}
    />
  );
}
export const PrimaryText = ({ size, width, height }) => {
  return (
    // <Icons.Svg
    // svg={appSvgs.logo}
    // size={size||responsiveWidth(50)}
    // />
    <Icons.Custom
    size={size}
    width={width}
    height={height}
    icon={appImages.logoText}
    />
  );
}
export const PrimaryWhite = ({ size }) => {
  return (
    <Icons.Svg
    svg={appSvgs.logo_white}
    size={size||responsiveWidth(50)}
    />
  );
}