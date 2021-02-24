import React from 'react';
import { View, StyleSheet,ImageBackground } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent(props) {

     const [isDarkTheme,setIsDarkTheme]=React.useState(false);
     const toggleTheme=()=>{
         setIsDarkTheme(!isDarkTheme);
     }
  

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
            <ImageBackground  style={{width:'100%',marginTop:-10}}
              source={{ uri: "https://cdn.pixabay.com/photo/2018/08/29/13/15/landscape-3639879_960_720.jpg" }} >
            {/* // style={styles.userInfoSection}> */}
                <View style={{padding:25}}>
                    <Avatar.Image  style={{marginLeft:'auto',marginRight:'auto',marginTop:20}}
                    size={100}
                   source={{ uri: 'https://cdn.pixabay.com/photo/2017/05/23/17/12/doctor-2337835_960_720.jpg' }} />
                    <View style={{marginLeft:15, flexDirection:'column',marginTop:20}}>
                        <Title style={styles.title}>Meraj Ahmed</Title>
                    </View>
                </View>
            </ImageBackground>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('UserHome')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Appointment"
                            onPress={() => {props.navigation.navigate('AppointmentHistoryScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label=" Profile"
                            // onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About Us"
                            // onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            // onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
            </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    // onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    // userInfoSection: {
    //   paddingLeft: 20,
    // },
    title: {
      fontSize: 16,
      marginLeft:'auto',
      marginRight:'auto'
    //   marginTop: 3,
    //   fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#694fad',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
