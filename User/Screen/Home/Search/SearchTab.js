import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SearchNameScreen from './SearchName';
// import SearchPlaceScreen from './SearchPlace';
import SearchHospitalScreen from './SearchHospital';

const SearchTab = createMaterialTopTabNavigator();

const SearchTabScreen = () => (
    <SearchTab.Navigator
    initialRouteName="Name"
    tabBarOptions={{
      labelStyle: { fontSize: 14,fontWeight:'bold' },
    }}

  >
    <SearchTab.Screen
      name="Name"
      component={SearchNameScreen}
      options={{ tabBarLabel: 'Name' }}
    />
    <SearchTab.Screen
      name="Hospital"
      component={SearchHospitalScreen}
      options={{ tabBarLabel: 'Hospital' }}
    />
    {/* <SearchTab.Screen
      name="Place"
      component={SearchPlaceScreen}
      options={{ tabBarLabel: 'Place' }}
    /> */}
  </SearchTab.Navigator>

);
export default SearchTabScreen;