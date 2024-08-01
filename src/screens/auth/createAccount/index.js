import React, { Component } from 'react';
import { View, } from 'react-native';
import { totalSize } from 'react-native-dimension';
import {  Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, Logos, CheckBoxes } from '../../../components';
import { responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appIcons, colors } from '../../../services';
import { useHooks } from './hooks';
export default function Index(props) {
  const { navigate } = props.navigation

  const { handleLogin, handleRegister, handletoggle, isChecked,handletoggle1, handletoggle2, isSecure, isSecure1, confrimPassword, setConfirmPassword, password, setPassword, email, setEmail } = useHooks()
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.WithKeyboardAvoidingView>
       
        <Wrapper>
         <Spacer isBasic />
         <Text isUrbanistBoldFont alignTextCenter isLargeTitle>Register to get{"\n"}started</Text>
         
          <Spacer isBasic />
          <TextInputs.Colored
            title={'Email'}
            placeholder={"example@gmail.com"}
            value={email}
            onChangeText={setEmail}
          />
          <Spacer isBasic />
          <TextInputs.Colored
            title={'Password'}
            value={password}
            onChangeText={setPassword}
            placeholder={"12345678"}
            customIconRight={appIcons.eye}
            onPressIconRight={handletoggle1}
            secureTextEntry={isSecure}
          />
          <Spacer isBasic />
          <TextInputs.Colored
            title={'Confirm Password'}
            value={confrimPassword}
            onChangeText={setConfirmPassword}
            placeholder={"12345678"}
            customIconRight={appIcons.eye}
            onPressIconRight={handletoggle2}
            secureTextEntry={isSecure1}
          />
          <Spacer isBasic />
          
          <Wrapper marginHorizontalMedium flexDirectionRow >
          <CheckBoxes.Primary checked={isChecked} onPress={handletoggle} uncheckedIconName={"checkbox-blank-outline"} checkedIconName={"checkbox-marked"} uncheckedIconColor={colors.button} checkedIconColor={colors.appTextColor7}  />
          <Text isInterRegularFont isSmall >I agree to the<Text isRegular isInterRegularFont isTextColor2 > Terms of Service</Text> and <Text isRegular isInterRegularFont isTextColor2>Privacy{"\n"}Policy</Text></Text>
          </Wrapper>

          <Spacer isBasic />
          <Buttons.Colored
            text="Register"
            onPress={handleRegister}
            buttonColor={colors.button2}
          />
         
          <Spacer isDoubleBase/>
          <Spacer isDoubleBase/>
          <Spacer isDoubleBase/>
          <Spacer isDoubleBase/>
          <Spacer isMedium />
         <Wrapper  >
         
         
         <Text alignTextCenter isRegular isUrbanistRegularFont>Already have an account? <Text isTouchable={handleLogin} isBlue isRegular isMediumFont alignTextCenter >Login Now</Text> </Text> 
          <Spacer isBasic />
          </Wrapper>
        </Wrapper>

      </ScrollViews.WithKeyboardAvoidingView>
    </Wrapper>
  );
}

