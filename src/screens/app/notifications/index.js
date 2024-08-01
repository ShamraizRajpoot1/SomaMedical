import React, { Component } from 'react';
import { Wrapper, Text, Headers, Icons, Spacer, ScrollViews } from '../../../components';
import {useHooks} from './hooks'
import { colors, responsiveWidth } from '../../../services';
import { Icon } from '@rneui/base';

export default function Index(props) {
    const { } = useHooks(props)
    return (
        <Wrapper isMain >
            <Headers.Primary
                title={'Notifications'}
                showBackArrow
                tintColor={colors.black}
            />
            <ScrollViews.KeyboardAvoiding>
            <Wrapper marginHorizontalBase>
            <Text isTinyTitle isMediumFont>New</Text>
            </Wrapper>
            <Wrapper marginHorizontalSmall background2 paddingHorizontalSmall paddingVerticalBase flexDirectionRow justifyContentSpaceBetween style={{borderRadius:12}}>
                <Wrapper style={{width:responsiveWidth(70)}}>
                    <Text isLarge isRegularFont isPrimaryColor >Lorem ipsum dolor sit amet. Sed tempora error et fuga enim et iste voluptas.</Text>
                </Wrapper>
                <Icon name='dots-horizontal' type='material-community' size={responsiveWidth(8)} />
            </Wrapper>
            <Spacer isSmall />
            <Wrapper marginHorizontalSmall background2 paddingHorizontalSmall paddingVerticalBase flexDirectionRow justifyContentSpaceBetween style={{borderRadius:12}}>
                <Wrapper style={{width:responsiveWidth(70)}}>
                    <Text isLarge isRegularFont isPrimaryColor >Lorem ipsum dolor sit amet. Sed tempora error et fuga enim et iste voluptas.</Text>
                </Wrapper>
                <Icon name='dots-horizontal' type='material-community' size={responsiveWidth(8)} />
            </Wrapper>
            <Spacer isSmall />
            <Wrapper marginHorizontalSmall background2 paddingHorizontalSmall paddingVerticalBase flexDirectionRow justifyContentSpaceBetween style={{borderRadius:12}}>
                <Wrapper style={{width:responsiveWidth(70)}}>
                    <Text isLarge isRegularFont isPrimaryColor >Lorem ipsum dolor sit amet. Sed tempora error et fuga enim et iste voluptas.</Text>
                </Wrapper>
                <Icon name='dots-horizontal' type='material-community' size={responsiveWidth(8)} />
            </Wrapper>
            <Spacer isBasic />
            <Wrapper marginHorizontalBase>
            <Text isTinyTitle isMediumFont>Past Notifications</Text>
            </Wrapper>
            <Spacer isBasic />
            <Wrapper marginHorizontalSmall background2 paddingHorizontalSmall paddingVerticalBase flexDirectionRow justifyContentSpaceBetween style={{borderRadius:12}}>
                <Wrapper style={{width:responsiveWidth(70)}}>
                    <Text isLarge isRegularFont isPrimaryColor >Lorem ipsum dolor sit amet. Sed tempora error et fuga enim et iste voluptas.</Text>
                </Wrapper>
                <Icon name='dots-horizontal' type='material-community' size={responsiveWidth(8)} />
            </Wrapper>
            <Spacer isSmall />
            <Wrapper marginHorizontalSmall background2 paddingHorizontalSmall paddingVerticalBase flexDirectionRow justifyContentSpaceBetween style={{borderRadius:12}}>
                <Wrapper style={{width:responsiveWidth(70)}}>
                    <Text isLarge isRegularFont isPrimaryColor >Lorem ipsum dolor sit amet. Sed tempora error et fuga enim et iste voluptas.</Text>
                </Wrapper>
                <Icon name='dots-horizontal' type='material-community' size={responsiveWidth(8)} />
            </Wrapper>
            <Spacer isLarge />
            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    );
}

