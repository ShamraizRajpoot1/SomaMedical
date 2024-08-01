import React, { Component } from 'react';
import { Wrapper, Text, Headers, Buttons, TextInputs, Spacer, ScrollViews } from '../../../components';
import {useHooks} from './hooks'
import { colors, responsiveHeight, responsiveWidth } from '../../../services';

export default function Index(props) {
    const { checkout,firstName,setFirstName,lastName, setLastName,email, setEmail,phoneNumber, setPhoneNumber,city,setCity,location,setLocation,zip,setZip } = useHooks(props)
    return (
        <Wrapper isMain >
            <Headers.Primary
                title={'Address'}
                showBackArrow
                tintColor={colors.black}
            />
            <ScrollViews.KeyboardAvoiding>
            <Wrapper flex={1}>
                
                <Spacer isSmall />
                <Wrapper  flexDirectionRow justifyContentFlexstart>
                    <TextInputs.Colored value={firstName} onChangeText={setFirstName} title={"First Name"} placeholder={"John"} containerStyle={{width:responsiveWidth(42),marginRight:0}} />
                    <TextInputs.Colored value={lastName} onChangeText={setLastName} title={"Last Name"} placeholder={"Doe"} containerStyle={{width:responsiveWidth(42)}}  />
                </Wrapper>
                <Spacer isBasic />
                <TextInputs.Colored  value={email} onChangeText={setEmail} title={"Email"} placeholder={"example@gmail.com"} />
                <Spacer isBasic />
                <TextInputs.Colored value={phoneNumber} onChangeText={setPhoneNumber} keyboardType={"numeric"} title={"Phone Number"} placeholder={"+12346789"} />
                <Spacer isBasic />
                <TextInputs.Colored value={city} onChangeText={setCity} title={"City"} placeholder={"Sialkot"} />
                <Spacer isBasic />
                <TextInputs.Colored value={location} onChangeText={setLocation} title={"Location"}  placeholder={"Home- 106 Trail Lake Rd La Fayette, Georgia(GA), 30728"} numberOfLines={3} />
                <Spacer isBasic />
                <TextInputs.Colored keyboardType={"numeric"} value={zip} onChangeText={setZip} title={"Zip/Postcode"} placeholder={"John"} containerStyle={{width:responsiveWidth(42),marginRight:0}} />
            </Wrapper>
            {/* <Spacer height={responsiveHeight(20)} /> */}
            <Wrapper  marginHorizontalLarge>
                <Spacer isBasic/>
                <Buttons.Colored 
                text={"Save Changes"}
                buttonColor={colors.button2}
                onPress={checkout}
                />
            </Wrapper>
            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    );
}

