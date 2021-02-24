// In App.js in a new project
import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Homefolder/HomeScreen';

import UserworkScreen from './userfolder/UserScreen';
import HospitalScreen from './hospitalfolder/HospitalScreen';

import UserLoginScreen from './userfolder/loginsignup/LoginScreen';
import UserSignupScreen from './userfolder/loginsignup/SignupScreen';

import HospitalLoginScreen from './hospitalfolder/loginsignup/LoginScreen';
import HospitalSignupScreen from './hospitalfolder/loginsignup/SignupScreen';

import UserHomeScreen from './userfolder/Home/UserHomeTabScreen';
import HospitalHomeScreen from './hospitalfolder/Home/HospitalHomeScreen';

// import ExploreDoctorScreen from './userfolder/Home/Screen/ExploreScreen';
import DoctorProfileScreen from './userfolder/Home/Screen/DoctorProfile';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserworkScreen} />
        <Stack.Screen name="Hospital" component={HospitalScreen} />
        <Stack.Screen name="Loginuser" component={UserLoginScreen} />
        <Stack.Screen name="Signupuser" component={UserSignupScreen} />
        <Stack.Screen name="LoginHospital" component={HospitalLoginScreen} />
        <Stack.Screen name="SignupHospital" component={HospitalSignupScreen} />
        <Stack.Screen name="Userhome" component={UserHomeScreen} />
        <Stack.Screen name="Hospitalhome" component={HospitalHomeScreen} />
        {/* <Stack.Screen name="ExploreDoctor" component={ExploreDoctorScreen} /> */}
        <Stack.Screen name="ExploreDoctorProfile" component={DoctorProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;