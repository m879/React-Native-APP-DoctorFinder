import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Avatar, Button, Card, Title, Paragraph ,Divider,Caption,Headline,Subheading} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text,Dimensions ,Image,View} from 'react-native';



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
                     onPress={() => navigation.navigate('Home')}
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
                    {/* <Subheading>{route.params?.name}</Subheading> */}
                    {/* <Caption>{route.params?.address}</Caption> */}
                    <Caption>Time: 9:00 am to 11:00pm</Caption>
                    <Subheading style={{color:'black'}}>Doctor name : </Subheading>
                    <Caption>
                          Dr. Akhlakh Ahmed ,Dr. Rehan Akram ,Dr. Anam Siddiqui
                    </Caption>
                </View>
                <Subheading style={{color:'black'}}>Details</Subheading>
                {/* <Caption>{route.params?.details}</Caption> */}
            </View>

       </ScrollView>
    )
}
