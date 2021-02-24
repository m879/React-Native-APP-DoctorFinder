import React from 'react';
import { ScrollView, Text,  StyleSheet,View ,Dimensions,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Searchbar } from 'react-native-paper';

import { Avatar, Button, Card, Title, Paragraph ,Divider,Caption,Headline,Subheading} from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";

import Timeline from 'react-native-timeline-flatlist';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height,width} = Dimensions.get("screen");

const BookmarkScreen = ({ navigation,route }) => {
    // React.useEffect(() => {
        // if (route.params?.post) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        // }
    //   }, [route.params?.post]);

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const data = [
        {
          //  title: 'Hospital', 
          //  description: 'Appolo Hospital,New Delhi',
           icon:<Icon name="thumbs-up" size={20} color="red" />
        },
        {
          //  title: 'Appointment Fee', 
          //  description: '500',
           icon:<Icon name="thumbs-up" size={20} color="red" />
        },
        {
          //  title: 'Qualifications', 
          //  description: 'Description',
           icon:<Icon name="thumbs-up" size={20} color="red" />
        },
        {
          //  title: 'Experiences', 
          //  description: '5 years in AIIMS Delhi',
           icon:<Icon name="thumbs-up" size={20} color="red" />
        },
        {
          //  title: 'Additional Experiences', 
          //  description: 'Description',
           icon:<Icon name="thumbs-up" size={20} color="red" />
        }
      ]

    return (
      <ScrollView>
            <View style={{marginTop:25,display:'flex'}}>
                <Grid>
                    <Col size={0.5} >
                    <Icon.Button name="chevron-back-outline" size={25} backgroundColor="white" color="gray"
                     // onPress={() => navigation.openDrawer()}
                     onPress={() => navigation.navigate('Explore')}
                     ></Icon.Button>
                    </Col>
                    <Col size={3.5}>
                        <Searchbar
                      placeholder="Search"
                      onChangeText={onChangeSearch}
                      value={route.params?.name}
                    />
                    </Col>
                </Grid>
            </View>
            <View>
                <Image style={{height:height/4}} source={{ uri: 'https://cdn.pixabay.com/photo/2017/08/18/12/23/building-2654823_960_720.jpg' }} />
                <Avatar.Image size={120}  style={styles.centerimage} source={{ uri: 'https://cdn.pixabay.com/photo/2017/05/23/17/12/doctor-2337835_960_720.jpg' }} />
            </View>
        
            {/* <Card > */}
                {/* <Card.Cover style={{height:150}} source={{ uri: 'https://cdn.pixabay.com/photo/2017/08/18/12/23/building-2654823_960_720.jpg' }} /> */}
            {/* </Card> */}

            <Card style={{marginTop:10,marginBottom:10,marginLeft:10,marginRight:10}}>
                    <Card.Content style={styles.center}>
                  <Title> {route.params?.name}</Title>
                  <Paragraph>{route.params?.work}</Paragraph>
                </Card.Content>
            </Card>

            <Card style={{margin:10}}>
                <Card.Content>
                    <View style={{margin:10}}>
                      <Grid>
                        <Col size={1}>
                          <MaterialCommunityIcons name="hospital-building"  
                           style={{marginLeft:'auto',marginRight:'auto',color:'blue'}}
                          size={30} />
                        </Col>
                        <Col size={3}>
                          <Title>Hospital</Title>
                          <Caption style={{color:'red'}}>Appolo Hospital,New Delhi</Caption>
                        </Col>
                      </Grid>
                    </View>
                    <Divider />
                    <View style={{margin:10}}>
                        <Grid>
                          <Col size={1}>
                             <MaterialCommunityIcons name="timetable"  
                              style={{marginLeft:'auto',marginRight:'auto',color:'blue'}}
                             size={30} />
                          </Col>
                          <Col size={3}>
                              <Title>Time</Title>
                              <Grid>
                                <Col>
                                  <Caption>Mon-Tue</Caption>
                                </Col>
                                <Col>
                                  <Caption>8:00 am-6:00 pm</Caption>
                                </Col>
                              </Grid>
                              <Grid>
                                <Col>
                                  <Caption>Sun</Caption>
                                </Col>
                                <Col>
                                  <Caption>10:00 am-2:00 pm</Caption>
                                </Col>
                              </Grid>
                          </Col>
                        </Grid>
                    </View>
                    <Divider />
                    <View style={{margin:10}}>
                       <Grid>
                         <Col size={1}>
                         <MaterialCommunityIcons name="doctor"  
                              style={{marginLeft:'auto',marginRight:'auto',color:'blue'}}
                             size={30} />
                         </Col>
                         <Col size={3}>
                              <Title>Experiences</Title>
                              <Caption>5 years in AIIMS Delhi</Caption>
                              <Caption>10 years in City Hospital</Caption>
                         </Col>
                       </Grid>
                    </View>
                    <Divider />
                    <View style={{margin:10}}>
                        <Grid>
                          <Col size={1}>
                             <MaterialCommunityIcons name="medal-outline"  
                              style={{marginLeft:'auto',marginRight:'auto',color:'blue'}}
                             size={30} />
                          </Col>
                          <Col size={3}>
                             <Title>Achivements</Title>
                             <Caption>Gold Medal in Chest Specialist</Caption>
                             <Caption>Gold Medal in Chest Specialist</Caption>
                          </Col>
                        </Grid>
                    </View>
                    <Divider />
                    <View style={{margin:10}}>
                        <Title>Additions Informations</Title>
                        <Caption>{route.params?.detail}</Caption>
                    </View>
                </Card.Content>
                <Card.Actions style={{padding:20}}>
                    <Button  mode="contained" 
                    // style={styles.center}
                    style={[styles.center,{borderRadius:50}]}

                    onPress={() => navigation.navigate('AppointmentScreen')}
                   >Take Appointment</Button>
                </Card.Actions>
            </Card>

            {/* <Card style={{marginTop:10,marginBottom:20,marginLeft:10,marginRight:10}}> */}
             {/* <Timeline style={{marginTop:30}} */}
                {/* data={data} */}
                {/* circleSize={35} */}
                {/* circleColor='rgb(45,156,219)' */}
                {/* // lineColor='green' */}
                {/* descriptionStyle={{color:'gray'}} */}
                {/* innerCircle={'icon'} */}
              {/* //   columnFormat='single-column-right' */}
              {/* // columnFormat='two-column' */}
              {/* /> */}
            {/* </Card> */}


      </ScrollView>
    );
};

export default BookmarkScreen;

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
        // height:150,
        // width:150
        // marginTop:60
      },
  });
  