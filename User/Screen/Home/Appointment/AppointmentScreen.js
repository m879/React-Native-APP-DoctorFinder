import React from 'react';
import {View,ScrollView,StyleSheet} from 'react-native';
import {Text ,Subheading,Caption,TextInput,Button} from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";

export default function AppointmentScreen({navigation}) {
    const [text, setText] = React.useState('');

    return (
        <ScrollView>
            <View style={{margin:30}}>
                <Subheading style={styles.center}>Appointment Book</Subheading>
            </View>
            <View style={{margin:20}}>
                <Subheading>Doctor name</Subheading>
                <Caption>Dr.Akhlakh Ahmed</Caption>
                <Caption>Lohiya Hospital</Caption>
                <Caption>Chest Specialist</Caption>
            </View>
            <View style={{margin:20}}>
                <TextInput   label="Patient Name*"   value={text}
                    onChangeText={text => setText(text)}    style={{marginTop:20}}
                />
                <TextInput   label="Patient Aadhar Card Number*"   value={text}
                    onChangeText={text => setText(text)}  style={{marginTop:20}}
                />
                 <TextInput   label="Patient Address*"   value={text}
                    onChangeText={text => setText(text)}  style={{marginTop:20}}
                />
                <View style={{margin:20}}>
                   <Button mode="contained"
                        onPress={() => navigation.navigate('AppointmentFinishedScreen')}
                   >Appointment</Button>
                </View>
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
  