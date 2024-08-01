import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { appFonts, appIcons, appImages, colors, responsiveFontSize, responsiveWidth, routes, tabs, useReduxStore } from "../../services";
import { Icons, Images, Wrapper } from "../../components";
import { Icon } from "@rneui/base";
import * as App from '../../screens/app'
import Text from "../../components/text";
const BottomTabStack = createBottomTabNavigator();

export default function BottomTabNavigation() {
    const tabIconSize = responsiveFontSize(25)




    const TabIcon = ({ color,text, iconName, iconType, size, focused, image }) => {
        return (
            <Wrapper alignItemsCenter justifyContentCenter style={{ flex: 1, backgroundColor: focused && colors.button2 ,  borderRadius:12, paddingTop:5,paddingHorizontal:responsiveWidth(3)  }}>
                {
                    !image ?
                        <Icon name={iconName} type={iconType} size={tabIconSize}  focused={focused} color={focused ? colors.snow : colors.appBgColor7} />
                        :
                        <Icons.Custom icon={image} color={color} size={size} />
                        // <Images.Round source={{ uri: image }} size={tabIconSize} style={{ opacity: focused ? 1 : 0.5 }} />

                }
                <Text isRegular style={{color: focused ? colors.snow : colors.appBgColor7 , fontFamily: focused ? appFonts.appTextBoldInter: appFonts.appTextRegular }}>{text}</Text>
            </Wrapper>
        )
    }
    return (
        <>
            <BottomTabStack.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel:false,
                    ...tabs.tabBarOptions,
                }}
            >
                <BottomTabStack.Screen
                    name={routes.home}
                    component={App.Home}
                    options={() => ({
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size, focused }) => {
                            return <TabIcon iconName='home' text={"Home"} iconType='feather' size={tabIconSize} color={color} focused={focused} />
                        },
                    })}
                />
                <BottomTabStack.Screen
                    name={routes.products}
                    component={App.Products}
                    options={() => ({
                        tabBarLabel: "Products",
                        tabBarIcon: ({ color, size, focused }) => {
                            return <TabIcon image={appIcons.product} text={"Products"} size={tabIconSize} color={color} focused={focused} />
                        },
                    })}
                />
                <BottomTabStack.Screen
                    name={routes.cart}
                    component={App.Cart}
                    options={() => ({
                        tabBarLabel: "Cart",
                        tabBarIcon: ({ color, size, focused }) => {
                            return <TabIcon iconName='shopping-cart' text={"Cart"} iconType='feather' size={tabIconSize} color={color} focused={focused} />
                        },
                    })}
                />

                <BottomTabStack.Screen
                    name={routes.account}
                    component={App.Account}
                    options={() => ({
                        tabBarLabel: "Account",
                        tabBarIcon: ({ color, size, focused }) => {
                            return <TabIcon iconName='user' text={"Account"} iconType='feather' size={tabIconSize} color={color} focused={focused} />
                        },
                    })}
                />


            </BottomTabStack.Navigator>
        </>
    )
}