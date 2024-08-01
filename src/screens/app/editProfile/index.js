import React, { Component } from 'react';
import { Wrapper, Text, Headers, Images, Icons, TextInputs, Buttons } from '../../../components';
import {useHooks} from './hooks'
import { appImages, colors, responsiveWidth } from '../../../services';


export default function Index(props) {
    const { openLibrary } = useHooks(props)
    return (
        <Wrapper isMain >
            <Headers.Primary
                title={'Edit Profile'}
                showBackArrow
                tintColor={colors.black}
            />
            <Wrapper isCenter>
            <Images.Round source={{uri:appImages.user1}} size={responsiveWidth(25)} />
            <Wrapper style={{position:'absolute'}}>
            <Icons.Button onPress={openLibrary} iconName={"camera"} buttonSize={responsiveWidth(25)} iconType={"feather"} buttonColor={colors.transparent} iconColor={colors.snow} />
            </Wrapper>
            </Wrapper>
            <Wrapper  flexDirectionRow justifyContentFlexstart>
                    <TextInputs.Colored title={"First Name"} placeholder={"John"} containerStyle={{width:responsiveWidth(42),marginRight:0}} />
                    <TextInputs.Colored title={"Last Name"} placeholder={"Doe"} containerStyle={{width:responsiveWidth(42)}}  />
                </Wrapper>
                <Spacer isBasic />
                <TextInputs.Colored title={"Email"} placeholder={"example@gmail.com"} />
                <Spacer isBasic />
                <TextInputs.Colored title={"Phone Number"} placeholder={"+12346789"} />
                <Spacer isBasic />
                <TextInputs.Colored title={"City"} placeholder={"Sialkot"} />
                <Spacer isBasic />
                <TextInputs.Colored title={"Location"}  placeholder={"Home- 106 Trail Lake Rd La Fayette, Georgia(GA), 30728"} numberOfLines={3} />
                <Wrapper marginHorizontalLarge>
                <Spacer isBasic />
                <Buttons.Colored text={"Save Changes"} buttonColor={colors.button2} />
                </Wrapper>
        </Wrapper>
    );
}

