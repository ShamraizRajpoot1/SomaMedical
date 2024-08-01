import React, { Component } from 'react';
import { Wrapper, Text, Logos, Icons } from '../../../components';
import { appImages, appStyles, responsiveHeight, responsiveWidth } from '../../../services';

function Splash() {
  return (
    <Wrapper isMain isCenter imageBackgroundSource={appImages.background}>
      
     
      <Logos.Primary
        size={responsiveWidth(60)}
      />
    </Wrapper>
  );
}

export default Splash;
