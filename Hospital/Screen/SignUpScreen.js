import * as React from 'react';
import { View, Text ,Button} from 'react-native';

function HospitalSignUp({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text  style={{margin:20,fontSize:20}}>HospitalSignUp Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('HospitalHomeTab')}
        />
      </View>
    );
  } 
export default HospitalSignUp;