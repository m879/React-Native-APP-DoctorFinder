import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Home/HomeScreen';
import UserTab from './User/UserTab';
import HospitalTab from './Hospital/HospitalTab';
import UserSignUp from './User/Screen/SignUpScreen';
import UserHomeTab from './User/Screen/Home/UserHomeTab';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserTab" component={UserTab} />
        <Stack.Screen name="HospitalTab" component={HospitalTab} />
        <Stack.Screen name="UserSignUp" component={UserSignUp} />
        <Stack.Screen name="UserHomeTab" component={UserHomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;