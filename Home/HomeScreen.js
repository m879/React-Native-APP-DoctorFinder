import * as React from 'react';
import { View,Image,StyleSheet,ScrollView,Dimensions} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';

import Swiper from 'react-native-swiper';

// import img from './assets/images/img1.png';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Avatar, Button, Card, Title, Paragraph,Subheading,Caption, Divider,Text } from 'react-native-paper';


const {height,width} = Dimensions.get("screen");
const height_upper= height-100;
const width_upper= width ;

function Home({navigation}) {

 

  // const height_lower=height*0.79-height_upper;


  
// const images = [
//   {
//    banner:require('../assets/images/Bg1.jpg'),
//    desc: 'Silent Waters in the mountains in midst of Himilayas',
//   },
//  {
//    banner:require('../assets/images/img2.png'),
//    desc:
//      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
//  },
//  ]

    return (
        <View style={{backgroundColor:'white'}}>
          <View>
            <View  style={styles.centerbox}>
            <Image  source={require('../assets/images/icon.png')} style={{height:150,width:150}}  resizeMode="cover" />
               {/* <Title style={{color:"#694fad" ,fontStyle:'italic',fontWeight:'bold'}}>Doctor Connect</Title> */}
            </View>
          </View>

          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate={0}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.scrollbox}>
               <Image  source={require('../assets/images/img1.png')}  resizeMode="cover"  style={styles.image}/>
              <View style={styles.centerbox}>
                <Title   style={[styles.centerbox,{marginTop:-20}]}>Why Doctor's use?</Title>
                <View
                   style={{marginLeft:50,marginRight:50,textAlign:'center'}}
                  >
                  <Caption>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam.
                  </Caption>
                </View>
              </View>
            </View>
            <View style={styles.scrollbox}  >
               <Image  source={require('../assets/images/img2.png')}  resizeMode="cover"  style={styles.image}/>
               <View style={styles.centerbox}>
                <Title   style={[styles.centerbox,{marginTop:-20}]}>Why patient use?</Title>
                <View
                   style={{marginLeft:50,marginRight:50,textAlign:'center'}}
                  >
                  <Caption>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam.
                  </Caption>
                </View>
              </View>

            </View>
            <View style={styles.scrollbox} >
               <Image  
                  // source={require('../assets/images/hospital.gif')}  
                  // source={{uri: 'https://assets3.lottiefiles.com/packages/lf20_mR5H7A.json'}}  
                  source={{uri:'https://cdn.pixabay.com/photo/2017/05/28/18/56/dentist-2351844_960_720.png'}}  
               resizeMode="cover"  style={styles.image}/>
                  <View style={{margin:30}}>
                      <Title   style={[styles.centerbox,{marginTop:-25}]}>Register Hospital</Title>
                      <View>
                        <View style={{textAlign:'center'}}>
                          <Caption>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore.
                          </Caption>
                        </View>
                        <View style={{margin:10}}>
                        <Button  mode="contained"
                            onPress={() => navigation.navigate('HospitalTab')}
                          >Hospital Register</Button>
                        </View>
                      </View>
                  </View>             
            </View>
            <View style={styles.scrollbox} >
            <Image  
                  // source={require('../assets/images/img3.png')}  
                  source={{uri:'https://cdn.pixabay.com/photo/2016/11/18/12/07/white-male-1834118_960_720.jpg'}}  
               resizeMode="cover"  style={styles.image}/>
               {/* <Image  source={require('../assets/images/img3.png')}  resizeMode="cover"  style={styles.image}/> */}
                  <View style={{margin:30}}>
                  <Title   style={[styles.centerbox,{marginTop:-25}]}>Register Patient</Title>
                      <View>
                          <View
                           style={{textAlign:'center'}}
                          >
                          <Caption>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore.                          
                          </Caption>
                        </View>
                        <View style={{flexDirection: 'row',
                           justifyContent: 'center', alignItems: 'center',}}>
                          <View style={{marginRight:10}}>
                            <Button mode="contained" style={{borderRadius:30}}
                              onPress={() => navigation.navigate('UserTab')}
                            >Login</Button> 
                          </View>
                          <View style={{marginLeft:10}}>
                            <Button mode="contained" style={{borderRadius:30}}
                              onPress={() => navigation.navigate('UserSignUp')}
                            >SignUp</Button>
                          </View>
                        </View>
                        {/* <View style={{margin:10}}> */}
                           {/* <Button mode="contained" */}
                              {/* // onPress={() => navigation.navigate('UserTab')} */}
                          {/* //  >Patient Register</Button>                         */}
                        {/* </View> */}
                      </View>
                  </View>             
            </View>

          </ScrollView>



        {/* <View style={{marginTop:50}}>
           <FlatListSlider  
           data={images}
           renderItem = {({item}) => <Image  source = {{uri : item.banner}}/>}

           />
        </View> */}

        {/* <Text style={{margin:20,fontSize:20}}>For User Screen</Text>
        <Button
          title="Go to User"
          onPress={() => navigation.navigate('UserTab')}
        />
        <Text style={{margin:20,fontSize:20}}>For Hospital Screen</Text>

         <Button
          title="Go to Hospital"
          onPress={() => navigation.navigate('HospitalTab')}
        /> */}
      </View>
    );
  } 
export default Home;



const styles = StyleSheet.create({
  scrollbox:{
    height:height_upper,width:width_upper,
    marginTop:-20,
    marginLeft:"auto",marginRight:'auto',
    backgroundColor:'white',
    borderRadius:50
  },
  image:{
    height:250,
    width:250,
    marginTop:30,
    marginLeft:'auto',
    marginRight:'auto'
  },
  centerbox:{
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:50
  }
 
});
