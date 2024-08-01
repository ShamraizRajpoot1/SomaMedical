import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, headers } from '../../services';
import * as App from '../../screens/app';
import BottomTab from './bottomTab'
const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={routes.bottomTab}
        >   

             <AppStack.Screen name={routes.bottomTab} component={BottomTab} /> 
            <AppStack.Screen name={routes.productDetails} component={App.ProductDetails} />
            <AppStack.Screen name={routes.requestContact} component={App.RequestContact} />
            <AppStack.Screen name={routes.address} component={App.Address} />
            <AppStack.Screen name={routes.changePassword} component={App.ChangePassword} />
            <AppStack.Screen name={routes.checkout} component={App.Checkout} />
            <AppStack.Screen name={routes.editProfile} component={App.EditProfile} />
            <AppStack.Screen name={routes.notifications} component={App.Notifications} />
            <AppStack.Screen name={routes.paymentMethod} component={App.PaymentMethod} />
        </AppStack.Navigator>
    )
}

export default AppNavigation