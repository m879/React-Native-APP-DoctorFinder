import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text ,Button} from 'react-native';

const HospitalStackTab = createStackNavigator();


function Home(){
    return(
        <View>
            <Text>Welcome to home tab</Text>
        </View>
    )
}

function HospitalHomeScreen() {
    return (
     <HospitalStackTab.Navigator >
        <HospitalStackTab.Screen name="HospitalHomePage" component={Home} />
      </HospitalStackTab.Navigator>
    );
} 
export default HospitalHomeScreen;