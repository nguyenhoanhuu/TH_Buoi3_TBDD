import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import ForgetPassword from '../components/ForgetPassword';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home"> 
                <Stack.Screen name="Home" component={Home}  />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;
