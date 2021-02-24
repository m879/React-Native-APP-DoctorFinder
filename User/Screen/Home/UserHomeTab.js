import * as React from 'react';
import { View, Text ,Button} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './Home/HomeScreen';
import EditProfileScreen from './Profile/ProfileScreen';
import ExploreScreen from './Explore/ExploreDoctor';
import SearchTab from './Search/SearchTab';

import NotificationScreen from './DrawerScreen/NotificationScreen';
// import AppointmentHistory from './DrawerScreen/AppointmentHistory';
import Appointment from './Appointment/AppointmentScreen';
import AppointmentFinished from './Appointment/AppointmentFinished';


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const EditStack = createStackNavigator();
const SearchStack = createStackNavigator();


const UserHomeScreen = () => {
    return (
      <Tab.Navigator
      initialRouteName="UserHome"
      barStyle={{ backgroundColor: '#694fad' }}

      // activeColor="#e91e63"
      // style={{ backgroundColor: 'yellow' }}
    >
      <Tab.Screen
        name="UserHome"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="UserSearch"
        component={SearchTabScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={EditStackScreen }
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker-radius" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    );
};

export default UserHomeScreen;



const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator 
    // headerMode="none"
    screenOptions={{
            headerStyle: {
              elevation:0,
              shadowOpacity: 0,
            // backgroundColor: '#694fad',
            },
            // headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}
        >
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} 
            // backgroundColor="#694fad" 
            backgroundColor="#fff"
            color="green"
            onPress={() => navigation.openDrawer()}
            ></Icon.Button>
        ),
        headerRight: () => (
          <Icon.Button name="notifications" size={25} 
          // backgroundColor="#694fad" 
          backgroundColor="#fff"
          color="green"
          onPress={() => navigation.navigate("NotificationScreen")}
          ></Icon.Button>
      ),
        title: 'DoctorFind'
        }} />
          <HomeStack.Screen name="NotificationScreen" component={NotificationScreen}
          options={{
            title:'Doctor Connect'
          }}/>
           <HomeStack.Screen name="AppointmentScreen" component={Appointment} 
          options={{
            title:'Doctor Connect'
           }}/>
            <HomeStack.Screen name="AppointmentFinishedScreen" component={AppointmentFinished} 
          options={{
            title:'Doctor Connect'
           }}/>
    </HomeStack.Navigator>
  );




const SearchTabScreen = ({navigation}) => (
    <SearchStack.Navigator screenOptions={{
      headerStyle: {
        elevation:0,
        shadowOpacity: 0,
      // backgroundColor: '#694fad',
      },
      // headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
    }}>
      <SearchStack.Screen name="Explore" component={SearchTab} 
        options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} 
            // backgroundColor="#694fad" 
            backgroundColor="#fff"
            color="green"
            onPress={() => navigation.openDrawer()}
            ></Icon.Button>
        ),
        headerRight: () => (
          <Icon.Button name="notifications" size={25} 
          // backgroundColor="#694fad" 
          backgroundColor="#fff"
          color="green"
          onPress={() => navigation.navigate("NotificationScreen")}
          ></Icon.Button>
      ),
        title: 'DoctorFind'
        }} />
      </SearchStack.Navigator>
);
  
  const ExploreStackScreen = ({navigation}) => (
    <ExploreStack.Navigator screenOptions={{
            headerStyle: {
              elevation:0,
              shadowOpacity: 0,

            // backgroundColor: '#694fad',
            },
            // headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
        <ExploreStack.Screen name="Explore" component={ExploreScreen} 
        options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} 
            // backgroundColor="#694fad" 
            backgroundColor="#fff"
            color="green"
            onPress={() => navigation.openDrawer()}
            ></Icon.Button>
        ),
        headerRight: () => (
          <Icon.Button name="notifications" size={25} 
          // backgroundColor="#694fad" 
          backgroundColor="#fff"
          color="green"
          onPress={() => navigation.navigate("NotificationScreen")}
          ></Icon.Button>
      ),
        title: 'DoctorFind'
        }} />
    </ExploreStack.Navigator>
  );
  
  
   
  const EditStackScreen = ({navigation}) => (
      <EditStack.Navigator screenOptions={{
              headerStyle: {
                elevation:0,
                shadowOpacity: 0,

              // backgroundColor: '#694fad',
              },
              // headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              }
          }}>
          <EditStack.Screen name="Edit Profile" component={ EditProfileScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} 
              // backgroundColor="#694fad" 
              backgroundColor="#fff"
              color="green"
              onPress={() => navigation.openDrawer()}
              ></Icon.Button>
          ),
          headerRight: () => (
            <Icon.Button name="notifications" size={25} 
            // backgroundColor="#694fad" 
            backgroundColor="#fff"
            color="green"
            onPress={() => navigation.navigate("NotificationScreen")}
            ></Icon.Button>
        ),
          title: 'DoctorFind'
          }} />
      </EditStack.Navigator>
  ); 
      
  
  
  
  