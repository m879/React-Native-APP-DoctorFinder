import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const UserStack = createStackNavigator();
const HospitalStack = createStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to User"
        onPress={() => navigation.navigate('User')}
      />
       <Button
        title="Go to Hospital"
        onPress={() => navigation.navigate('Hospital')}
      />
    </View>
  );
}



function UserHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>USER Home Screen</Text>     
    </View>
  );
}


function HospitalHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HOSPITAL Home Screen</Text>
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('Signin')}
      /> 
    </View>
  );
}

function SigninScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signin Screen</Text>
      {/* <Button
        title="Go to User"
        onPress={() => navigation.navigate('User')}
      /> */}
    </View>
  );
}

function UserScreen() {
  return (      
      <UserStack.Navigator >
        <UserStack.Screen name="Login" component={LoginScreen} />
        <UserStack.Screen name="Signin" component={SigninScreen} />
      </UserStack.Navigator>
  );  
}


function HospitalLoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hospital Login Screen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('HospitalSignin')}
      /> 
    </View>
  );
}

function HospitalSigninScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hospital Signin Screen</Text>
      {/* <Button
        title="Go to User"
        onPress={() => navigation.navigate('User')}
      /> */}
    </View>
  );
}

function HospitalScreen() {
  return (      
      <HospitalStack.Navigator >
        <HospitalStack.Screen name="HospitalLogin" component={HospitalLoginScreen} />
        <HospitalStack.Screen name="HospitalSignin" component={HospitalSigninScreen} />
      </HospitalStack.Navigator>
  );  
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Hospital" component={HospitalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;