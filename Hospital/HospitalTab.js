import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HospitalLoginScreen from './Screen/LoginScreen';
import HospitalSignUpScreen from './Screen/SignUpScreen';
import HospitalHomeTab from './Screen/Home/HospitalHomeTab';

const HospitalStack = createStackNavigator();
function HospitalTab() {
    return (
     <HospitalStack.Navigator headerMode='none'>
        <HospitalStack.Screen name="HospitalLogin" component={HospitalLoginScreen} />
        <HospitalStack.Screen name="HospitalSignUp" component={HospitalSignUpScreen} />
        <HospitalStack.Screen name="HospitalHomeTab" component={HospitalHomeTab} />
      </HospitalStack.Navigator>
    );
} 
export default HospitalTab;