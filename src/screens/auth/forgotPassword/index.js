import React, {Component} from 'react';
import {Wrapper, Text, Headers, Icons, Spacer, TextInputs, Buttons, Modals} from '../../../components';
import {useHooks} from './hooks';
import {colors, responsiveWidth} from '../../../services';

export default function Index(props) {
  const {email,setEmail, toggle, isVisible,handleLogin} = useHooks(props);
  return (
    <Wrapper isMain>
      <Wrapper marginHorizontalBase marginVerticalMedium>
        <Icons.Button
        onPress={handleLogin}
          iconName={'chevron-left'}
          buttonStyle={{
            borderColor: colors.appBgColor4,
            borderWidth: responsiveWidth(0.3),
          }}
        />
        </Wrapper>
        <Wrapper marginHorizontalBase>
        <Spacer isBasic />
        <Text isLargeTitle isUrbanistBoldFont>Forgot Password?</Text>
        <Spacer isSmall />
        <Text isGray isRegular >Please enter the email address linked with your account to reset your password.</Text>
        </Wrapper>
        <Spacer isBasic />
      
      <TextInputs.Colored
            title={'Email'}
            value={email}
            onChangeText={setEmail}
            placeholder={"example@gmail.com"}
          />
          <Spacer isDoubleBase />
           <Buttons.Colored
            text="Send Code"
            onPress={toggle}
            buttonColor={colors.button2}
          />
          <Modals.Popup onPressButton={handleLogin} title={"Password Changed!"} discription={"A password reset link has been sent to\nyour email successfully."} buttonText={"Back to Login"} isVisible={isVisible} toggleModal={toggle} />
    </Wrapper>
  );
}
