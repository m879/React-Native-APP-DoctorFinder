import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import UserLoginScreen from './Screen/LoginScreen';
import UserSignUpScreen from './Screen/SignUpScreen';
import UserHomeTab from './Screen/Home/UserMainTab';
import DoctorProfile from './Screen/Home/Explore/DoctorProfile';
import HospitalProfile from './Screen/Home/Search/HospitalDetail';

const UserStack = createStackNavigator();

function UserTab() {
    return (
     <UserStack.Navigator headerMode='none'>
        <UserStack.Screen name="UserLogin" component={UserLoginScreen} />
        <UserStack.Screen name="UserSignUp" component={UserSignUpScreen} />
        <UserStack.Screen name="UserHomeTab" component={UserHomeTab} />
        <UserStack.Screen name="ExploreDoctorProfile" component={DoctorProfile} />
        <UserStack.Screen name="ExploreHospitalDetails" component={HospitalProfile} />
      </UserStack.Navigator>
    );
} 
export default UserTab;