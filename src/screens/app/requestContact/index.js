import React, { Component } from 'react';
import { Wrapper, Text, Headers, TextInputs, Buttons, Modals } from '../../../components';
import {useHooks} from './hooks'
import { colors, responsiveHeight, responsiveWidth } from '../../../services';
import Spacer from '../../../components/spacer';

export default function Index(props) {
    const { isVisible, handleProducts, toggle } = useHooks(props)
    return (
        <Wrapper isMain flex={1}>
            <Headers.Primary 
                showBackArrow
                title={"Request Contact"}
                tintColor={colors.black}
            />
            <Wrapper flex={1}>
                <Wrapper  flexDirectionRow justifyContentFlexstart>
                    <TextInputs.Colored title={"First Name"} placeholder={"John"} containerStyle={{width:responsiveWidth(42),marginRight:0}} />
                    <TextInputs.Colored title={"Last Name"} placeholder={"Doe"} containerStyle={{width:responsiveWidth(42)}}  />
                </Wrapper>
                <Spacer isSmall />
                <TextInputs.Colored title={"Email"} placeholder={"example@gmail.com"} />
                <Spacer isSmall />
                <TextInputs.Colored title={"Phone Number"} placeholder={"+12346789"} />
                <Spacer isSmall />
                <TextInputs.Colored title={"City"} placeholder={"Sialkot"} />
                <Spacer isSmall />
                <TextInputs.Colored title={"Location"}  placeholder={"Home- 106 Trail Lake Rd La Fayette, Georgia(GA), 30728"} numberOfLines={3} />
                
                
            </Wrapper>
            {/* <Spacer height={responsiveHeight(20)} /> */}
            <Wrapper style={{bottom:responsiveHeight(3)}} marginHorizontalLarge>
                <Buttons.Colored 
                text={"Request Contact"}
                buttonColor={colors.button2}
                onPress={toggle}
                />
            </Wrapper>
            <Modals.Popup onPressButton={handleProducts} title={"Request Sent"} discription={"Your contact request has been sent successfully!"} buttonText={"Continue"} isVisible={isVisible} toggleModal={toggle} />
        </Wrapper>
    );
}

