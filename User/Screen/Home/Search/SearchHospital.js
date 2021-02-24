import React from 'react';
import { ScrollView, Text,  StyleSheet,flex ,View,Dimensions,Image,ImageBackground} from 'react-native';
import { Searchbar,Divider } from 'react-native-paper';
import { List,Avatar, Card, Title, Paragraph,Caption,Subheading,Button} from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";

import Hospitalname from './HospitalList.json'

import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';


const EditProfileScreen = ({navigation}) => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  
  const {height,width} = Dimensions.get("screen");
  // const height_upper= height * 0.48;
  // const height_lower=height*0.79-height_upper;

    return (
      <ScrollView>
        {/* <View style={{padding:20,backgroundColor:'#fff'}}> */}
          {/* <Image source={require('../../../../assets/images/hospital.gif')} style={{width:"100%",height:height/4}}></Image> */}
        {/* </View> */}
         <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height:height/4}}>
           <Searchbar
              placeholder="Search by Hospital Name"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{borderRadius:50,marginLeft:20,marginRight:20,marginTop:height/10}}
            />
        </View>
        <Divider/>
        <View style={{margin:10}}>            
            <View>
               <Subheading>Hospital Available</Subheading>
            </View>
            {
                Hospitalname.name.map((row) => (
                  <Card style={{marginTop:10}} >
                    <Grid>
                      <Col size={1} style={{backgroundColor:'red'}}>
                        <Card.Cover style={{height:"100%",width:100}}  
                        source={{ uri: 'https://cdn.pixabay.com/photo/2017/08/07/20/05/doctors-2607295_960_720.jpg' }}  />
                      </Col>
                      <Col size={3}>
                        <View style={{marginLeft:20}}>
                            <View style={{marginTop:5,marginLeft:20,marginBottom:10}}>
                                 <Subheading>{row.hospital}</Subheading>
                                 <Caption style={{color:'green'}}>{row.address}</Caption>
                            </View>
                            {/* <Divider/>                          */}
                          <Card.Content>
                            <Grid>
                              <Col>
                                 <Grid>
                                   <Col size={1}>
                                       <Icon name="thumbs-up" size={20} color="green" />
                                   </Col>
                                   <Col size={3}>
                                        <Caption>{row.likes}</Caption>
                                   </Col>
                                 </Grid>
                              </Col>
                              <Col>
                                  <Grid>
                                    <Col size={1}>
                                       <Icon  name="thumbs-down" size={20} color="red" />
                                    </Col>
                                    <Col size={3}>
                                        <Caption>{row.dislikes}</Caption>
                                    </Col>
                                  </Grid>
                              </Col>
                            </Grid>
                          </Card.Content> 
                          <Divider/>                         
                  <View style={{margin:5}}>
                    <Grid>
                      <Col size={1}>
                        <Icon.Button name="share-alt" size={20}
                        style={{marginLeft:"auto",marginRight:'auto'}}
                        backgroundColor="#fff" color="gray" 
                        ></Icon.Button>
                      </Col>
                      <Col size={3}>
                          <Button 
                                 onPress={() => navigation.navigate('ExploreHospitalDetails',
                                 { name:row.hospital,address:row.address,
                                  details:row.details}
                                )}
                          >View Details</Button>
                      </Col>
                    </Grid>
                  </View>
 
                        </View>
                      </Col>
                    </Grid>
                  </Card>
              ))
            }

        </View>
      </View>
      </ScrollView>
    );
};

export default  EditProfileScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    margin:10
  },
  centerimage: {
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:-60
    },
});
