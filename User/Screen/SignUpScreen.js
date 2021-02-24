import * as React from 'react';
import { View,ScrollView,Dimensions,Image} from 'react-native';
import { TextInput,Text,Button,Surface,Divider,Caption,IconButton} from 'react-native-paper';

function UserSignUp({navigation}) {

  const [text, setText] = React.useState('');

  // const [width,height]=
  const {height,width} = Dimensions.get("screen");


    return (
        <ScrollView style={{backgroundColor:'#fff'}}>
              <Image  source={require('../../assets/images/icon.png')} 
          style={{height:150,width:150,marginLeft:'auto',marginRight:'auto',marginTop:30}} 
           resizeMode="cover" />
            {/* <Surface style={{padding:10,marginTop:100}}> */}
            <View style={{marginLeft:30,marginRight:30}}>
              <View >
                <TextInput   label="Name*"   value={text} style={{marginTop:10}}
                    onChangeText={text => setText(text)}
                />
                <TextInput label="Email*" value={text}  style={{marginTop:10}}
                    onChangeText={text => setText(text)}
                />
                <TextInput label="District*" value={text}  style={{marginTop:10}}
                    onChangeText={text => setText(text)}
                /> 
                <TextInput label="Password*" value={text}  style={{marginTop:10}}
                    onChangeText={text => setText(text)}
                />
                <Button mode="contained" style={{marginTop:20}}
                    onPress={() => navigation.navigate('UserHomeTab')}
                >SignUp</Button>
              </View> 
              <View>
                <Divider style={{marginTop:25}}/>
                <Caption style={{marginTop:-10,marginLeft:'auto',marginRight:'auto',
                backgroundColor:'#fff',paddingLeft:20,paddingRight:20}}>OR</Caption>  
              </View> 

              <View>
                <View style={{flexDirection: 'row',
                        justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{marginRight:10}}>
                    <IconButton size={30} icon="google"
                        onPress={()=>alert("Glad to help you")} 
                        color="white" style={{backgroundColor:'red'}}></IconButton>
                    {/* <Button>Click me</Button> */}
                  </View>
                  <View style={{marginLeft:10}}>
                  <IconButton size={30} icon="facebook"  
                     onPress={()=>alert("Glad to help you")} 
                     color="white" style={{backgroundColor:'blue'}}></IconButton>
                    {/* <Button>Click me/Button> */}
                  </View>
                </View>
              </View>



            </View>
          {/* </Surface> */}
      </ScrollView>
    );
  } 
export default UserSignUp;