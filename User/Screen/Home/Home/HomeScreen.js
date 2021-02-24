import React from 'react';
import { View, StyleSheet , ImageBackground, Image,} from 'react-native';
import { Searchbar ,Text} from 'react-native-paper';
// import {FlatListSlider} from 'react-native-flatlist-slider';

import { ScrollView,Dimensions} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,Subheading,Chip,Headline ,IconButton,Caption} from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/Ionicons';

import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const image = { uri: "https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955_960_720.jpg" };

const {height,width} = Dimensions.get("screen");


// import img from '../../../../assets/images/skeleton.svg'
const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);


   const hospital=[
     {
        id:'1',
        name:"Radiant Hospital"
     },
     {
      id:'2',
      name:"Savitri Hospital"
     },
     {
      id:'3',
      name:"Lohiya Hospital"
     },
     {
      id:'4',
      name:"PGI Hospital"
     },
     {
      id:'5',
      name:"Sahara Hospital"
     },
     {
      id:'6',
      name:"Buddha Hospital from Kushinagar"
     }
   ]

    return (
      <ScrollView 
      style={{backgroundColor:'#fff'}}
      >

      <View>
        <Image source={require('../../../../assets/images/doctor.gif')} style={{width:"100%",height:height/4}}></Image>
      </View>
      <View  style={{height:height/3.8}}>
         <Grid style={{marginTop:height/15}}>
          <Col>
             <IconButton   style={styles.center}  icon="earth" size={40} onPress={() => console.log('Pressed')}/>
             <Caption style={styles.center}>Consult now</Caption>
          </Col>
          <Col>
             <IconButton style={styles.center} icon="camera-iris"  color="red" size={40}  onPress={() => console.log('Pressed')} />  
            <Caption style={styles.center}>Consult now</Caption>   
          </Col>
          <Col>
             <IconButton style={styles.center} icon="hospital-marker" size={40} onPress={() => console.log('Pressed')} />   
              <Caption style={styles.center}>Consult now</Caption>    
          </Col>
        </Grid>
      </View>
      


      <View style={{height:height/3.5}}>
          <View style={{marginLeft:20,padding:5,marginBottom:10}}>
             <Subheading style={{fontWeight:'bold'}}>Hospitals</Subheading>
          </View>
          <ScrollView horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            style={{marginBottom:20}}
           >
            {
              hospital.map((row) => (
                <View style={{marginBottom:30}}>
                <IconButton   style={styles.center} icon="hospital-building"  color="#694fad"  size={40} />
                <Chip  size={80} 
                mode="outlined"
                selectedColor="green"
                style={{marginLeft:10,marginRight:10,marginTop:-10,elevation:4,backgroundColor:'#fff'}} 
                onPress={() => console.log('Pressed')}>{row.name}</Chip>
                 </View>
              ))
            }
          </ScrollView>
      </View>


      <View>
        <View style={{marginLeft:20,padding:5}}>
           <Subheading  style={{fontWeight:'bold'}}>Latest Updates</Subheading>
        </View>
        <View style={{margin:10}}>
            <Card>
             <Card.Content>
               <Caption>
                 Hello world
               </Caption>
             </Card.Content>
            </Card>
        </View>
      </View>






      <View>
        <View style={{marginLeft:20,padding:5}}>
           <Subheading  style={{fontWeight:'bold'}}>Top Specialities</Subheading>
        </View>
        <Grid style={{margin:10}}>
          <Col>
          <Card style={{margin:15}}>
             <Card.Cover style={{height:80}} source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/19/03/lungs-154282_960_720.png' }} />
          </Card>
          <Card style={{margin:15}}>
             <Card.Cover style={{height:80}} source={{ uri: 'https://cdn.pixabay.com/photo/2018/06/11/15/48/eye-3468709_960_720.png' }} />
          </Card>
          <Card style={{margin:15}}>
             <Card.Cover style={{height:80}} source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/13/01/23/brain-155656_960_720.png' }} />
          </Card>

          
          </Col>
          <Col>
          <Card style={{margin:15}}>
             <Card.Cover style={{height:80}} source={{ uri: 'https://cdn.pixabay.com/photo/2014/04/03/00/34/left-308715_960_720.png' }} />
          </Card>
          <Card style={{margin:15}}>
             <Card.Cover style={{height:80}} source={{ uri: 'https://cdn.pixabay.com/photo/2014/04/03/10/31/stomach-310730_960_720.png' }} />
          </Card>
          <Card style={{margin:15}}>
             <Card.Cover style={{height:80}} source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/13/53/kidney-147499_960_720.png' }} />
          </Card>

          </Col>
          <Col>
          <Card style={{margin:15}}>
          <Card.Cover style={{height:80}} source={require('../../../../assets/images/teeth.png') } />

             {/* <Card.Cover style={{height:80}} source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/14/03/05/surgery-1822458_960_720.jpg' }} /> */}
          </Card>
          <Card style={{margin:15}}>
             <Card.Cover style={{height:80}} source={require('../../../../assets/images/skeleton1.png') } />
          </Card>
          <Card style={{margin:15}}>
             <Card.Cover style={{height:80}} source={require('../../../../assets/images/heart.png') } />
             {/* <Card.Cover style={{height:80}} source={{ uri: 'https://cdn.pixabay.com/photo/2016/09/28/12/59/human-heart-1700453_960_720.png' }} /> */}
          </Card>

          </Col>
        </Grid>
      </View>





     
        <View>
          {/* <Animatable.Card animation="zoomInUp" style={{margin:10}}> */}
            {/* <Button mode="contained" >Latest Appointment</Button> */}
           {/* <Card.Content> */}
             {/* <Title>Card title</Title> */}
             {/* <Paragraph>Card content</Paragraph> */}
           {/* </Card.Content> */}
          {/* </Animatable.Card> */}
        </View>
        

        {/* <Searchbar */}
      {/* // placeholder="Search" */}
      {/* // onChangeText={onChangeSearch} */}
      {/* // value={searchQuery} */}
    {/* // /> */}
        {/* <Text style={{fontSize:20,color:'green'}}>User Home Screen</Text> */}
      
    <View style={{marginLeft:20,padding:5,marginBottom:20}}>
      <Subheading  style={{fontWeight:'bold'}}>Health Feed</Subheading>
    </View>
    
    
    <ScrollView
       horizontal
       scrollEventThrottle={1}
       showsHorizontalScrollIndicator={false}
       style={{marginBottom:20}}
      >
        <Card style={{margin:10,width:300,height:200,elevation:4}}>
           <ImageBackground source={image} style={styles.image}>
             <Headline style={styles.text}>Inside</Headline>
             <Caption style={styles.textdetails}>
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam.
             </Caption>
           </ImageBackground>
        </Card>

        <Card style={{margin:10,width:300,height:200,elevation:4}}>
           <ImageBackground source={image} style={styles.image}>
             <Headline style={styles.text}>Inside</Headline>
             <Caption style={styles.textdetails}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam.
              </Caption>
           </ImageBackground>
        </Card>

        <Card style={{margin:10,width:300,height:200,elevation:4}}>
           <ImageBackground source={{ uri: 'https://picsum.photos/700' }} style={styles.image}>
             <Headline style={styles.text}>Inside</Headline>
             <Caption style={styles.textdetails}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam.
              </Caption>
           </ImageBackground>
        </Card>

    </ScrollView>

    <Button mode="contained" style={{marginLeft:20,marginRight:20,marginBottom:30}}>Explore more</Button>

    </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  center: {
     marginLeft:'auto',
     marginRight:'auto',
     color:'blue',
     shadowColor:'green',
    //  backgroundColor:'lightblue',
     elevation:3
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius:50
    // justifyContent: "center"
  },
  text: {
    marginTop:70,
    color: "white",
    margin:20,
    // fontSize: 42,
    fontWeight: "bold",
    // marginLeft:20,
    // marginBottom:30,
    // textAlign: "center",
    backgroundColor: "#000000a0"
  },
  textdetails: {
    marginTop:'auto',
    color: "white",
    // fontSize: 42,
    fontWeight: "bold",
    marginLeft:20,
    marginBottom:10,
    marginRight:20,
    // textAlign: "center",
    backgroundColor: "#000000a0"
  }
});
