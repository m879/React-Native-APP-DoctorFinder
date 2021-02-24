import React from 'react';
import {View,ScrollView,StyleSheet} from 'react-native';
import {Text ,Subheading,Caption,TextInput,Button} from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AppointmentScreen() {
    const [text, setText] = React.useState('');
    return (
        <ScrollView>
            <View style={{margin:30}}>
                <Subheading style={styles.center}>Appointment Book Successfully</Subheading>
            </View>
            <View style={{margin:30}}>
                <Button mode="contained"
                 onPress={()=>alert("Downloaded Successfully!!!")}
                >Download PDF</Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    center: {
       marginLeft:'auto',
       marginRight:'auto'
    },   
});
  