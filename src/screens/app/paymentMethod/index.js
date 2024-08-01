import React, { Component } from 'react';
import { Wrapper, Text, Headers, TextInputs, Spacer, Icons, ScrollViews, Buttons } from '../../../components';
import {useHooks} from './hooks'
import { appIcons, appImages, colors, responsiveHeight, responsiveWidth } from '../../../services';

export default function Index(props) {
    const {saveData, cardName, setCardName,number, setNumber, expiry, setExpiry, cvv, setCvv } = useHooks(props)
    return (
        <Wrapper isMain >
            <Headers.Primary
                title={'Payment Method'}
                showBackArrow
                tintColor={colors.black}
            />
            <ScrollViews.KeyboardAvoiding>
            <Wrapper flex={1}>
                
            <Spacer />
            
            <Wrapper marginHorizontalBase style={{width:responsiveWidth(90), height: responsiveHeight(25)}} imageBackgroundSource={appImages.CreditCard}>
            <Spacer />
            <Wrapper flexDirectionRow justifyContentFlexend marginHorizontalBase>
                
                <Icons.Custom icon={appIcons.visa} color={colors.snow}/>
            </Wrapper>
            <Spacer height={responsiveHeight(8)} />
            <Wrapper marginHorizontalBase>
            <Text isWhite isMedium isRegularFont >{cardName}</Text>
            <Text isWhite isMedium isRegularFont >{number}</Text>
            </Wrapper>
            </Wrapper>
            <Spacer isDoubleBase />
            <TextInputs.Colored value={cardName} onChangeText={setCardName} title={"Card Holder Name"}  />
            <Spacer isBasic/>
            <TextInputs.Colored value={number} onChangeText={setNumber} title={"Card Number"}  />
            <Spacer />
            <Wrapper flexDirectionRow>
            <TextInputs.Colored value={expiry} onChangeText={setExpiry} containerStyle={{width:responsiveWidth(42)}} title={"Expiry Date"}  />
            <TextInputs.Colored value={cvv} onChangeText={setCvv} containerStyle={{width:responsiveWidth(42), marginLeft:responsiveWidth(0)}} title={"CVV"}  />
            </Wrapper>
            <Wrapper >

            </Wrapper>
            
            </Wrapper>
            <Wrapper marginVerticalLarge marginHorizontalLarge >
            <Buttons.Colored 
            text={"Save Changes"}
            buttonColor={colors.button2}
            onPress={saveData}
            />
            </Wrapper>
            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    );
}

