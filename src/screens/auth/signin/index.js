import React, { Component } from 'react';
import { View, } from 'react-native';
import { totalSize } from 'react-native-dimension';
import {  Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, Logos } from '../../../components';
import { responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appIcons, colors } from '../../../services';
import { useHooks } from './hooks';
export default function Index(props) {
  const { navigate } = props.navigation

  const { handleLogin, handleForgot, handleRegister,isSecure, handletoggle1, password, setPassword, email, setEmail } = useHooks()
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.WithKeyboardAvoidingView>
       
        <Wrapper>
          <Wrapper isCenter>
          <Logos.PrimaryText
          size={responsiveWidth(40)}
          width={responsiveWidth(70)}
         
      />
      </Wrapper>
          <Spacer isMedium />
          <TextInputs.Colored
            title={'Email'}
            value={email}
            onChangeText={setEmail}
            placeholder={"example@gmail.com"}
          />
          <Spacer isMedium />
          <TextInputs.Colored
            title={'Password'}
            value={password}
            onChangeText={setPassword}
            placeholder={"Password"}
            customIconRight={appIcons.eye}
            secureTextEntry={isSecure}
            onPressIconRight={handletoggle1}
          />
          <Spacer isRegular />
          <Wrapper marginHorizontalBase>
            <Text isUrbanistMediumFont isBlue  isRegular alignTextRight
              onPress={handleForgot}
            >Forgot Password?</Text>
          </Wrapper>
          <Spacer isMedium />
          <Buttons.Colored
            text="Login"
            onPress={handleLogin}
            buttonColor={colors.button}
          />
          <Spacer isDoubleBase/>
          <Spacer isDoubleBase/>
          <Spacer isDoubleBase/>
          <Spacer isDoubleBase/>
          <Spacer isDoubleBase/>
          <Spacer isMedium />
         <Wrapper  >
          <Text isRegular isRegularFont alignTextCenter
            onPress={() => navigate(routes.resetPassword)}
          >Don’t have an account?<Text isTouchable={handleRegister} isBlue isRegular isBoldFont alignTextCenter > Register Now</Text></Text>
         
          
          
          </Wrapper>
        </Wrapper>

      </ScrollViews.WithKeyboardAvoidingView>
    </Wrapper>
  );
}

