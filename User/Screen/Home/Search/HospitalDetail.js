import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Avatar, Button, Card, Title, Paragraph ,Divider,Caption,Headline,Subheading} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text,Dimensions ,Image,View} from 'react-native';

import Doctorlist from '../Explore/Suggestedperson.json';


export default function HospitalDetail({navigation,route}) {
    const {height,width} = Dimensions.get("screen");
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
       <ScrollView>
            <View style={{marginTop:25,display:'flex'}}>
                <Grid>
                    <Col size={0.5} >
                    <Icon.Button name="chevron-back-outline" size={25} backgroundColor="white" color="gray"
                     // onPress={() => navigation.openDrawer()}
                     onPress={() => navigation.navigate('Hospital')}
                     ></Icon.Button>
                    </Col>
                    <Col size={3.5}>
                        <Searchbar
                      placeholder="Search"
                      onChangeText={onChangeSearch}
                    />
                    </Col>
                </Grid>
            </View>
           <Image 
                source={{ uri: 'https://cdn.pixabay.com/photo/2017/08/07/20/05/doctors-2607295_960_720.jpg' }}                                       
                resizeMode="cover"  
                style={{height:height/4,width:width}}
            />
            <View style={{margin:30}}>
                {/* <Text>Welcome to this hospital</Text> */}
                <View>
                    <Subheading>{route.params?.name}</Subheading>
                    <Caption>{route.params?.address}</Caption>
                    <Caption>Time: 9:00 am to 11:00pm</Caption>
                    <Subheading style={{color:'black'}}>Doctor name : </Subheading>
                    <Caption>
                          Dr. Akhlakh Ahmed ,Dr. Rehan Akram ,Dr. Anam Siddiqui
                    </Caption>
                </View>
                <Subheading style={{color:'black'}}>Details</Subheading>
                <Caption>{route.params?.details}</Caption>
            </View>


<View style={{marginBottom:30}}>
    <View style={{marginLeft:30}}>
        <Subheading>Doctor in hospital</Subheading>
    </View>
        <ScrollView 
              horizontal
            //   pagingEnabled
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
              style={{marginTop:30}}
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









       </ScrollView>
    )
}
