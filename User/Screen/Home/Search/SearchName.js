import React from 'react';
import { ScrollView, StyleSheet,View,Dimensions,Image} from 'react-native';
import { Searchbar ,Text,Divider,Button} from 'react-native-paper';
import {FlatListSlider} from 'react-native-flatlist-slider';
// import Personsuggest from './Suggestedperson.json';
import { Avatar,  Card, Title, Paragraph,Caption ,Subheading} from 'react-native-paper';

import Doctorlist from '../Explore/Suggestedperson.json';

// import { Headline } from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";


import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const EditProfileScreen = ({navigation}) => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const {height,width} = Dimensions.get("screen");

  // const {height} = Dimensions.get("screen");
  // const height_upper= height * 0.28;
  // const height_lower=height*0.79-height_upper;

    return (
      <ScrollView>
         <View>
         <View style={{height:height/4}}>
           <Searchbar
              placeholder="Search by Doctor Name"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{borderRadius:50,marginLeft:20,marginRight:20,marginTop:height/10}}
            />
        </View>
        <Divider/>
        <View>
           <View style={{margin:10}}>
              <Subheading>Doctor's in your area</Subheading>
           </View>
           <ScrollView 
              horizontal
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
           >
           {
              Doctorlist.person.map((row) => (
                <Card style={{margin:5,elevation:4,borderRadius:20}}>
                  <View style={{margin:10}}>
                    <Grid>
                      <Col size={1}>
                        <MaterialCommunityIcons name="hospital-building"  
                         style={{marginLeft:'auto',marginRight:'auto',color:'blue'}}
                        size={20} />
                      </Col>
                      <Col size={3}>
                         <Caption style={{fontWeight:'bold'}}>Radiant Hospital (Padrauna)</Caption>
                      </Col>
                    </Grid>
                  </View>
                  <Divider/>
                  <Grid>
                    <Col size={1}>
                        <View style={{marginTop:20,marginLeft:10,marginBottom:20}}>
                           <Avatar.Image size={100}  
                           source={{ uri: 'https://cdn.pixabay.com/photo/2017/05/23/17/12/doctor-2337835_960_720.jpg' }} 
                           />
                        </View>
                    </Col>
                    <Col size={3}>
                      <View style={{marginTop:10}}>
                         <Card.Content style={{width:150}}> 
                           <View style={{marginTop:10,marginBottom:10}}>
                              <Subheading >{row.username}</Subheading> 
                              <Caption>MBBS,MD</Caption> 
                              <Caption style={{color:'green'}}>{row.work}</Caption> 
                           </View>
                         </Card.Content> 
                      </View>
                    </Col>
                  </Grid>
                  <Divider/>                         
                  <View style={{margin:5}}>
                    <Grid>
                      <Col>
                        <Icon.Button name="share-social" size={20}
                        style={{marginLeft:"auto",marginRight:'auto'}}
                        backgroundColor="#fff" color="gray" 
                        ></Icon.Button>
                      </Col>
                      <Col>
                        <Button 
                             onPress={() => navigation.navigate('ExploreDoctorProfile',
                              { 
                                  name: row.username,
                                  work:row.work,
                                  detail:row.details
                              })}
                        >Profile</Button>
                      </Col>
                    </Grid>
                  </View>
                 </Card>
                ))
              }
  
           </ScrollView>
           
        </View>
      </View>
      </ScrollView>
    );
};

export default  EditProfileScreen;

const styles = StyleSheet.create({
  center: {
    // flex: 1, 
    // alignItems: 'center', 
    // justifyContent: 'center',
    // margin:10,
    marginLeft:30,
    fontSize:20,
    marginBottom:20
    // fontWeight:"bold"
  },
  centerimage: {
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:-60
    },
});

