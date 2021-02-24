// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// For Drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './DrawerContent';

// import SupportScreen from './screens/screenassets/SupportScreen';
// import SettingsScreen from './screens/screenassets/SettingsScreen';
// import BookmarkScreen from './screens/screenassets/BookmarkScreen';

import MainTabScreen from './UserHomeTab';
import AppointmentHistory from './DrawerScreen/AppointmentHistory';
const Drawer=createDrawerNavigator();


function App() {
  return (
      <Drawer.Navigator drawerContent={props=><DrawerContent  {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="AppointmentHistoryScreen" component={AppointmentHistory} />
        {/* <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> */}
        {/* <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> */}
      </Drawer.Navigator>
  );
}

export default App;