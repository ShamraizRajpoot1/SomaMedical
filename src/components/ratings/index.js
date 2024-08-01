import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { totalSize } from 'react-native-dimension';
import Wrapper from '../wrapper'
import {  colors, responsiveHeight, responsiveWidth } from '../../services';
import { Icon } from '@rneui/base';
import Spacer from '../spacer';

export const Primary = ({ value, iconSize, iconStyle, onPressIcon, emptyIconName, fillIconName, emptyIconColor, fillIconColor, iconType, disabled }) => {
    const ratings = [1, 2, 3, 4, 5]
    return (
        <>
            <Wrapper flexDirectionRow>
                {
                    ratings.map((item, index) => {
                        const defaultIconName = item <= value ? fillIconName ? fillIconName : 'star' : emptyIconName ? emptyIconName : 'star'
                        const defaultIconColor = item <= value ? fillIconColor ? fillIconColor : colors.rating : emptyIconColor || colors.rating+'40'
                        const defaultIconSize=iconSize ? iconSize : totalSize(2)
                        return (
                            <Icon
                            key={index}
                                name={defaultIconName}
                                color={defaultIconColor}
                                size={defaultIconSize}
                                containerStyle={[{marginHorizontal:defaultIconSize/6},iconStyle]}
                                onPress={() => {
                                    !disabled && onPressIcon && onPressIcon(item)
                                }}
                                type={iconType ? iconType : 'ionicon'}
                                disabled={!onPressIcon}
                                disabledStyle={{ backgroundColor: colors.transparent }}
                            />

                        )
                    })
                }
            </Wrapper>
        </>
    )
}
export const Secondary = ({data,result }) => {
    
    const rating = [1, 2, 3, 4, 5]
    const ratings = data ? data : rating
    return (
        <>
            <Wrapper style={{width:responsiveWidth(65)}} >
                {
                    ratings.map((item, index) => {
                        const widths = item.ratings*100*ratings.length
                        console.log(widths);
                        const width = widths/result.sumOfRatings
                        return (<>
                        <Wrapper alignItemsCenter flexDirectionRow >
                            <Wrapper style={{width:responsiveWidth(2), marginRight:responsiveWidth(3)}}>
                            <Text>{ratings.length-index}</Text>
                            </Wrapper>
                        
                           <Wrapper backgroundColor={colors.appBgColor3} style={{borderRadius:100, width:'80%', height:responsiveHeight(1.5)}}>
                            <Wrapper backgroundColor={colors.bloodOrange} style={{borderRadius:100, width:`${width}%`}} paddingVerticalTiny>
                            
                            </Wrapper>
                            </Wrapper>
                        </Wrapper>
                            <Spacer height={responsiveHeight(2)}/>
                            </>
                        )
                    })
                }
            </Wrapper>
        </>
    )
}