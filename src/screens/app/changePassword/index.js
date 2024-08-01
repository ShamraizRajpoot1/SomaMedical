import React, { Component } from 'react';
import { Wrapper, Text, Headers, Spacer, TextInputs, Buttons, Modals } from '../../../components';
import {useHooks} from './hooks'
import { colors } from '../../../services';

export default function Index(props) {
    const { toggle, isVisible, handleContinue } = useHooks(props)
    return (
        <Wrapper isMain >
            <Headers.Primary
                title={'Index'}
                showBackArrow
            />
            <Wrapper flex={1}>
            <Spacer isBasic />
            <TextInputs.Colored title={"Old Password"} placeholder={"Enter your password"} />
            <Spacer isBasic />
            <TextInputs.Colored title={"New Password"} placeholder={"Enter your new password"} />
            <Spacer isBasic />
            <TextInputs.Colored title={"Confirm Password"} placeholder={"Enter your confirm password"} />
        </Wrapper>
        <Wrapper marginVerticalBase marginHorizontalLarge>
            <Buttons.Colored 
            text={"Save Changes"}
            buttonColor={colors.button2}
            onPress={toggle}
            />
        </Wrapper>
        <Modals.Popup onPressButton={handleContinue} title={"Password Changed!"} discription={"Your password has been changed successfully!"} buttonText={"Continue"} isVisible={isVisible} toggleModal={toggle} />
        </Wrapper>
    );
}

