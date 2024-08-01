import React, { Component } from 'react';
import { Wrapper, Text, Headers, UsersListVerticalPrimary, CartProductListVertical, ScrollViews, Spacer, Buttons } from '../../../components';
import {useHooks} from './hooks'
import { colors, responsiveHeight, responsiveWidth } from '../../../services';

export default function Index() {
    const { cartItems, Checkout, handleDelete, cartTotal } = useHooks()
    return (
        <Wrapper isMain >
            <Headers.Primary
            title={"Cart"}
            tintColor={colors.black}

            />
            <Wrapper flex={1} >
                <Wrapper marginHorizontalBase>
            <Text isLarge isUrbanistMediumFont>Total Products</Text>
            </Wrapper>
            <ScrollViews.KeyboardAvoiding>
            <CartProductListVertical onPressItem={handleDelete} data={cartItems} />
            </ScrollViews.KeyboardAvoiding>
            
            </Wrapper>
            <Wrapper marginVerticalBase justifyContentSpaceBetween flexDirectionRow>
            <Wrapper marginHorizontalBase >
                    <Text isMedium isUrbanistRegularFont>Total</Text>
                    <Text isTinyTitle isUrbanistBoldFont>${cartTotal}</Text>
                </Wrapper>
            <Buttons.Colored 
            buttonStyle={{width:responsiveWidth(43)}}
            text="Checkout"
            onPress={Checkout}
            buttonColor={colors.button2} />
      </Wrapper>
            
            <Spacer isBottomTabBarHeight />
        </Wrapper>
    );
}

