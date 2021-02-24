import React from 'react';
import { View,StyleSheet ,Dimensions} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { List,Avatar, Card, Title, Paragraph,Caption,Subheading,Button,Text,Surface,Searchbar} from 'react-native-paper';



const EditProfileScreen = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const {height,width} = Dimensions.get("screen");

    return (
      <View>
      <Searchbar
              placeholder="Search by Doctor Name"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{borderRadius:50,marginLeft:20,marginRight:20,marginTop:height/10}}
            />
      </View>
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
