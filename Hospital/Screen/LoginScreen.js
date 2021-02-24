import * as React from 'react';
import { View, Text ,Button} from 'react-native';

function Login({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text  style={{margin:20,fontSize:20}}>Login Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('HospitalHomeTab')}
        />
        <Text  style={{margin:20,fontSize:20}}>Dont have account Sign in</Text>
        <Button
          title="Go to Signup"
          onPress={() => navigation.navigate('HospitalSignUp')}
        />
        
      </View>
    );
  } 
export default Login;