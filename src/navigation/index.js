import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './auth';
import AppNavigation from './app';
import CommonNavigation from './common';
import { routes } from '../services';
import { Splash } from '../screens/auth';
import { navigationRef } from './rootNavigation';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainStack = createNativeStackNavigator();

export default function Navigation() {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);
    const [loading, setLoading] = useState(true);
    const [initialRoute, setInitialRoute] = useState(routes.auth);

    const onAuthStateChanged = user => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('Token');
                if (token) {
                    setInitialRoute(routes.app);
                } else {
                    setInitialRoute(routes.auth);
                }
            } catch (error) {
                console.error('Failed to fetch token from AsyncStorage:', error);
                setInitialRoute(routes.auth);
            } finally {
                setLoading(false);
            }
        };

        checkToken();

        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [initializing]);

    if (initializing || loading) {
        return <Splash />;
    }

    return (
        <NavigationContainer ref={navigationRef}>
            <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
                <MainStack.Screen name={routes.auth} component={AuthNavigation} />
                <MainStack.Screen name={routes.app} component={AppNavigation} />
                <MainStack.Screen name={routes.common} component={CommonNavigation} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}
