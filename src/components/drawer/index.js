import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes, FlatList, Platform } from 'react-native'
import { Icon } from '@rneui/base';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, sizes, appStyles, useKeyboardStatus, appImages, responsiveHeight, responsiveWidth } from '../../services';
import Modal from 'react-native-modal'
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';
import * as Icons from '../icons';
import * as Buttons from '../buttons';
import * as ScrollViews from '../scrollViews';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles.js';

export const drawer = ({ children, title,onPressButton,disableBackdropPress, isVisible, toggleModal,discription, footerFlex, headerFlex, buttonText }) => {
    return (
        <Modal
            isVisible={isVisible}
            swipeDirection="down"
            onSwipeComplete={toggleModal}
            style={{ margin: 0 }}
            backdropOpacity={0.3}
            onBackdropPress={toggleModal}
        >
            <Wrapper justifyContentCenter alignItemsCenter flex={1}>
            <TouchableOpacity onPress={disableBackdropPress ? null : toggleModal} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
                        
                    </TouchableOpacity>
                {/* <Wrapper flex={headerFlex ? headerFlex : 1.7} /> */}
                <Wrapper marginHorizontalBase  background1 style={{borderRadius:20,width:'90%'}} >
                    {children}
                    <Wrapper paddingVerticalLarge style={[styles.barContainer]}>
                        <Wrapper marginHorizontalBase  style={[appStyles.center]}>
                           <Icons.Custom icon={appImages.SuccessMark} size={sizes.icons.xxl} />
                            <Spacer isBasic />
                            <Text isMediumTitle isUrbanistBoldFont>{title}</Text>
                            <Spacer isSmall/>
                            <Text  isGray isRegular alignTextCenter>{discription}</Text>
                            <Spacer isDoubleBase />
                           
                        </Wrapper>
                        <Buttons.Colored onPress={onPressButton} text={buttonText} buttonColor={colors.button2}  />
                        
                    </Wrapper>
                    
                </Wrapper>
                {/* <Wrapper flex={headerFlex ? headerFlex : 1.7} /> */}
            </Wrapper>
        </Modal>
    );
}