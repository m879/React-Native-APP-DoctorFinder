import React from 'react';
import { ScrollView, Text, Button, StyleSheet,flex ,View,Dimensions} from 'react-native';
import { Searchbar } from 'react-native-paper';

const EditProfileScreen = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  
  const {height} = Dimensions.get("screen");
  const height_upper= height * 0.48;
  const height_lower=height*0.79-height_upper;

    return (
      <ScrollView>
         <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height: height_upper}} >
           {/* <Text style={{fontSize:20,color:'green'}}>User Edit Profile Screen</Text> */}
           <Searchbar
              placeholder="Search by Place Name"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{borderRadius:50,margin:20}}
            />
        </View>
        <View style={{height:height_lower, backgroundColor: 'skyblue'}} >
           {/* <Text style={{fontSize:20,color:'green'}}>User Edit Profile Screen</Text> */}
           {/* <Searchbar
              placeholder="Search by Hospital Name"
              onChangeText={onChangeSearch}
              value={searchQuery}
            /> */}
        </View>
        {/* <View style={{height: 250, backgroundColor: 'steelblue'}} /> */}
      </View>
      </ScrollView>
    );
};

export default  EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
