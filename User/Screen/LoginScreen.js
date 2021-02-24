import * as React from 'react';
import { View,Image,ScrollView} from 'react-native';
import { TextInput,Text,Button,Surface,Subheading,Title,Caption,IconButton, Divider} from 'react-native-paper';
import { StyleSheet } from 'react-native';
// import img from '../../assets/images/icon.png'

function Login({navigation}) {

  const [text, setText] = React.useState('');

    return (
        <ScrollView style={{backgroundColor:'#fff'}}>
                    <Image  source={require('../../assets/images/icon.png')} 
          style={{height:150,width:150,marginLeft:'auto',marginRight:'auto',marginTop:50}} 
           resizeMode="cover" />
           {/* <View> */}
             {/* <Title style={{fontWeight:'bold',marginLeft:'auto',marginRight:'auto'}}>Welcome back</Title> */}
           {/* </View> */}
          <View style={{marginLeft:30,marginRight:30}}>
             {/* <Text  style={{fontSize:20,textAlign:"center",fontWeight:'bold'}}> Login</Text> */}
              <View style={{marginTop:20}}>
                <TextInput   label="Username"   value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput label="Password" value={text} style={{marginTop:20}}
                    onChangeText={text => setText(text)}
                />
                <Button mode="contained" style={{marginTop:20,borderRadius:50}}
                   onPress={() => navigation.navigate('UserHomeTab')} 
                >Login</Button>

                <View>
                   <Button 
                    onPress={()=>alert("Glad to help you")} 
                   style={{marginLeft:'auto',marginRight:"auto",marginTop:10}}>Forget password?</Button>
                </View>

 
                <Divider style={{marginTop:5}}/>
                <Caption style={{marginTop:-10,marginLeft:'auto',marginRight:'auto',
                backgroundColor:'#fff',paddingLeft:20,paddingRight:20}}>OR</Caption>

                {/* <View style={{flexDirection: 'row', */}
                          {/* //  justifyContent: 'center', alignItems: 'center'}}> */}
                  {/* <View style={{backgroundColor:'green'}}><Divider style={{color:'black'}}/></View> */}
                  {/* <View><Caption>or</Caption></View> */}
                  {/* <View><Divider/></View> */}
                {/* </View> */}
                
                 <View>
                   <View style={{flexDirection: 'row',
                           justifyContent: 'center', alignItems: 'center'}}>
                     <View style={{marginRight:10}}>
                       <IconButton size={40} icon="google"
                           onPress={()=>alert("Glad to help you")} 
                           color="white" style={{backgroundColor:'red'}}></IconButton>
                       {/* <Button>Click me</Button> */}
                     </View>
                     <View style={{marginLeft:10}}>
                     <IconButton size={40} icon="facebook"  
                        onPress={()=>alert("Glad to help you")} 
                        color="white" style={{backgroundColor:'blue'}}></IconButton>
                       {/* <Button>Click me/Button> */}
                     </View>
                   </View>
                 </View>

                {/* <View style={{marginTop:20}}>
                    <Text  style={{margin:10,fontSize:15}}>Don't have account?</Text>
                    <Button  mode="contained"  style={{marginTop:20,borderRadius:50}}
                      onPress={() => navigation.navigate('UserSignUp')}
                    >SignUp</Button>
                </View> */}
               
              </View>       
          </View>
      </ScrollView>
    );
  } 
export default Login;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    // height: 80,
    // width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});