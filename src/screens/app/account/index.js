import React, { Component } from 'react';
import { Wrapper, Text, Headers, Icons, Spacer, Images, Switches } from '../../../components';
import {useHooks} from './hooks'
import { appIcons, appImages, colors, responsiveWidth } from '../../../services';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import Toggle from "react-native-toggle-element";

export default function Index() {
    const { toggle, handleToggle, ChangePassword, EditProfile, handleNotification } = useHooks()
    return (
        <Wrapper isMain >
        <Spacer isDoubleBase />
       <Wrapper marginHorizontalSmall flexDirectionRow justifyContentSpaceBetween>
        <Icons.Button iconName={"menu"} iconType={"feather"} iconColor={colors.black} />
        <Icons.Button iconName={"bell"} iconType={"feather"} iconColor={colors.black} onPress={handleNotification} />
        </Wrapper>
        <Wrapper isCenter >
        <Images.Round source={{uri:appImages.user1}} size={responsiveWidth(25)} />
        <Text isSmallTitle isMediumFont>John Doe</Text>
        </Wrapper>
        <Wrapper marginHorizontalBase>
        <Text isSmallTitle isMediumFont isBlue>Settings</Text>
        <Spacer />
        <Wrapper marginHorizontalBase flexDirectionRow>
        <Icons.Custom icon={appIcons.userSetting} />
        <Spacer horizontal />
        <Text isSmallTitle isMediumFont isBlue>Account</Text>
        </Wrapper>
        <Spacer />
        <TouchableOpacity  onPress={EditProfile} >
        <Wrapper alignItemsCenter paddingHorizontalBase paddingVerticalSmall style={styles.borderWraper} >
        <Text isLarge isRegularFont isGray>  Edit Profile</Text>
        <Icon name='chevron-right' color={colors.button2} size={responsiveWidth(10)} />
        </Wrapper>
        </TouchableOpacity>
        <Spacer />
        <TouchableOpacity onPress={ChangePassword} >
        <Wrapper alignItemsCenter paddingHorizontalBase paddingVerticalSmall style={styles.borderWraper} >
        <Text isLarge isRegularFont isGray>  Change Password</Text>
        <Icon name='chevron-right' color={colors.button2} size={responsiveWidth(10)} />
        </Wrapper>
        </TouchableOpacity>
        <Spacer />
        <Wrapper marginHorizontalBase flexDirectionRow>
        <Icon name='bell' type='material-community' backgroundColor={colors.button2} color={colors.snow} style={{padding:responsiveWidth(2), borderRadius:100}} />
        <Spacer horizontal />
        <Text isSmallTitle isMediumFont isBlue>Notification</Text>
        </Wrapper>
        <Spacer />
        
        <Wrapper alignItemsCenter paddingHorizontalBase paddingVerticalSmall style={styles.borderWraper} >
        <Text isLarge isRegularFont isGray>  Notification</Text>
        
        <Switches.Primary tintColor={colors.button2} value={toggle} onPress={handleToggle} />
        
        </Wrapper>
        
        </Wrapper>
     </Wrapper>
    );
}

const styles = StyleSheet.create({
    borderWraper:{
        borderWidth:responsiveWidth(0.3),
        borderColor:colors.appBgColor4,
        borderRadius:12,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

