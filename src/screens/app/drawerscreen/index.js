import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Wrapper, Text, Spacer } from '../../../components';
import { appFonts, appImages, colors, responsiveHeight, responsiveWidth } from '../../../services';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from '@rneui/base';

export default function Index(props)  {

    const categorylist = [
        'cardiologie',
        'oncologie',
        'Vasculaire',
        'hernie',
        'reanimation',
        'orl',
    ]
    const ThisPgBtn = ({ BtnName, }) => {
        const styles = StyleSheet.create({
            mainContainer: {
                borderColor: '#E5E7EB',
                borderWidth: 1,
                backgroundColor: '#F9FAFB',
                borderRadius: 8,
                height: responsiveHeight(5),
                justifyContent: 'center',
                alignItems: 'center',
            },
            textStyle: {
                width: responsiveWidth(40),
                fontFamily: appFonts.appTextMedium
            }
        })
        return (
            <Wrapper paddingHorizontalBase style={styles.mainContainer} flexDirectionRow>
                <Text isRegular style={styles.textStyle}>{BtnName}</Text>
                <Icon name='chevron-right' type='material-community' />
            </Wrapper>

        )
    }

    return (
        <Wrapper isMain style={styles.maincontainer} backgroundColor={colors.appBgColorPrimary}>
            <Wrapper style={styles.Secondblcomtainer} backgroundColor={"#fff"}>
                <Wrapper
                    style={styles.UpperContainerStyle}
                    backgroundColor={colors.appBgColorPrimary}>
                    <Wrapper isCenter style={styles.LogoContainer}>
                        <Image style={styles.LogoStyle} source={appImages.main_logo} resizeMode='contain' />
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Wrapper isMain background1 style={styles.DownMainContainer}>
                <Wrapper marginHorizontalMedium>
                    <Text isMedium
                        style={{ fontFamily: appFonts.appTextSemiBold }}
                    >
                        Category
                    </Text>
                    <Wrapper marginVerticalSmall>
                        <FlatList
                            data={categorylist}
                            showsVerticalScrollIndicator={false}
                            renderItem={(item) => {
                                return (<ThisPgBtn BtnName={item.item} key={item.index} />)
                            }}
                            ItemSeparatorComponent={() => <Spacer isSmall />}
                        />
                    </Wrapper>
                    <Spacer isDoubleBase />
                    <Wrapper>

                        <Text isMedium
                            style={{ fontFamily: appFonts.appTextSemiBold }}
                        >
                            Contact
                        </Text>
                        <Spacer isSmall />
                        <Pressable>
                            <Wrapper flexDirectionRow style={styles.contactBtn}>
                                <Feather
                                    name='phone'
                                    size={24}
                                    color={colors.appBgColorPrimary}
                                    style={{ paddingHorizontal: responsiveWidth(3) }}
                                />
                                <Text isRegular style={{ fontFamily: appFonts.appTextMedium }}>
                                    Request Contact
                                </Text>
                            </Wrapper>
                        </Pressable>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        overflow: 'hidden',
        // borderRadius: 22,
        borderTopRightRadius: 22,
        borderBottomRightRadius: 22,
    },
    Secondblcomtainer: {
        height: responsiveHeight(19)
    },
    UpperContainerStyle: {
        height: responsiveHeight(19),
        borderBottomLeftRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',

    },
    LogoContainer: {
        height: responsiveHeight(9),
        width: responsiveWidth(50),
        backgroundColor: '#fff',
        borderRadius: responsiveHeight(15) / 2
    },
    LogoStyle: {
        height: responsiveHeight(8),
        width: responsiveWidth(40),
    },
    DownMainContainer: {
        borderTopRightRadius: 22,
        paddingTop: responsiveHeight(4)
    },
    contactBtn: {
        borderColor: '#E5E7EB',
        borderWidth: 1,
        backgroundColor: '#F9FAFB',
        borderRadius: 8,
        height: responsiveHeight(5),
        width: responsiveWidth(50),
        alignItems: 'center',
    },
})