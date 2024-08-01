import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { routes } from '../../services';
import * as App from '../../screens/app';
import BottomTab from './bottomTab'
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName={routes.bottomTab}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name={routes.bottomTab} component={BottomTab} />
            <Drawer.Screen name={routes.community} component={App.Community} />
            <Drawer.Screen name={routes.account} component={App.Account} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
