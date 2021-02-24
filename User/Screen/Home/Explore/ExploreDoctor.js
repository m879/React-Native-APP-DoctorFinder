import React from 'react';
import { View,ScrollView, StyleSheet } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import { Avatar, Button, Card, Title, Paragraph,Subheading,Caption, Divider,Text } from 'react-native-paper';

import Personsuggest from './Suggestedperson.json';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ExploreScreen = ({ navigation, route }) => {
    return (
      <ScrollView >
          <View style={{margin:15}}>
              <Subheading>Explore Doctor's</Subheading>
          </View>
        <Grid style={{paddingBottom:20}}>
            <Col>
               {
                    Personsuggest.person.map((row) => (
                        <Card style={{margin:5}}>
                           <Card.Cover style={{height:80}} source={{ uri: 'https://cdn.pixabay.com/photo/2017/08/18/12/23/building-2654823_960_720.jpg' }} />
                           <Avatar.Image style={styles.centerimage} source={{ uri: 'https://picsum.photos/700' }} />
                           {/* <Avatar.Image style={styles.centerimage} source={require(row.img)}/> */}
                           <Card.Content style={styles.center}>
                              <View style={{marginTop:10,marginBottom:10}}>
                                 <Subheading>{row.username}</Subheading>
                                 <Caption>MBBS,AMU</Caption>
                                 <Caption style={{color:'green'}}>{row.work}</Caption>
                              </View>
                           </Card.Content>
                           <Divider/>
                           <Grid>
                             <Col size={1.5}>
                                <Icon.Button name="share-social" size={20}
                                style={{marginLeft:"auto",marginRight:'auto'}}
                                backgroundColor="#fff" color="gray" 
                                ></Icon.Button>
                             </Col>
                             <Col size={2.5}>
                                <Button 
                                    onPress={() => navigation.navigate('ExploreDoctorProfile',
                                     { name: row.username,work:row.work,detail:row.details}
                                    )}
                                >Profile</Button>
                             </Col>
                           </Grid>
                         </Card>
                      ))
                }
            </Col>
            <Col>
               {
                    Personsuggest.person.map((row) => (
                        <Card style={{margin:5}}>
                           <Card.Cover style={{height:80}} 
                           source={{ uri: 'https://cdn.pixabay.com/photo/2020/03/10/08/52/hospital-4918290_960_720.png' }} />
                           <Avatar.Image style={styles.centerimage} source={{ uri: 'https://picsum.photos/700' }} />
                           {/* <Avatar.Image style={styles.centerimage} source={require(row.img)}/> */}
                           <Card.Content style={styles.center}>
                              <View style={{marginTop:10,marginBottom:10}}>
                                 <Subheading>{row.username}</Subheading>
                                 <Caption>MBBS,AMU</Caption>
                                 <Caption style={{color:'green'}}>{row.work}</Caption>
                              </View>
                           </Card.Content>
                           <Divider/>
                           <Grid>
                             <Col size={1.5}>
                                <Icon.Button name="share-social" size={20}
                                style={{marginLeft:"auto",marginRight:'auto'}}
                                backgroundColor="#fff" color="gray" 
                                ></Icon.Button>
                             </Col>
                             <Col size={2.5}>
                                <Button 
                                    onPress={() => navigation.navigate('ExploreDoctorProfile',
                                     { name: row.username,work:row.work,detail:row.details}
                                    )}
                                >Profile</Button>
                             </Col>
                           </Grid>
                         </Card>
                      ))
                }
            </Col>
        </Grid>

      </ScrollView>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
    center: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    centerimage: {
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:-35
      },
  });
  
