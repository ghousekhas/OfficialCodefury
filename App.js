import React, { useEffect,useState } from 'react';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
import {Text,View,StyleSheet,TextInput, Dimensions, Alert,ScrollView} from 'react-native';
import Videocall from './src/screens/Videocall';
import {Styles,Constants, dimen,Colors} from './src/Constants';
import TextBox from './src/components/TextBox';
import SubmitButton from './src/components/SubmitButton';
import auth from '@react-native-firebase/auth';
import Login from './src/screens/Login';


function App() {
  const [user, setUser] = useState( auth().currentUser);
  const [done,setDone] = useState(false); 
  const [email,setEmail] = useState('');
  const [name,setName]= useState('');
  const edit = false;

  useEffect(()=>{
    const suser = auth().onAuthStateChanged(onAuthStateChanged);

  },[]);



  
  onAuthStateChanged = (user) => {
    setUser(user);
    //console.log(user);

  }



  function validateEmail() 
    {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
    }




    const aboutSubmit= async ()=>{
        //await AsyncStorage.setItem(Constants.username,name);
        console.log(email);
        console.log(name);
        console.log(validateEmail());
        if(validateEmail() && name.trim() != ''){
            setDone(true);
        }
        else{
            Alert.alert('Invalid mail','Please enter a valid email ID');
        }
    }

  if(user == null )
      return(<Login authChanged={onAuthStateChanged}/>)

  



  if(done)
    return (<Videocall email={email} name={name}/>);
    return(<View style={style.mainContainer}>
      {edit ? (
          <AppBar back={true} funct={()=>{
              navigation.goBack();
          }}/>
      ) : null}
   <ScrollView style={{flex: 1,marginVertical: dimen.width/20}}>  
  <Text style={style.text}>Tell us about yourself</Text>
  {
      edit ? (
          <View>
          <TextBox title='Name' defaultValue={name}  hint='Enter your name' changeText={setName}/>
      <TextBox title='Email Address' defaultValue={email} hint='Enter your email address' changeText={setEmail}/>
      </View>
      ) : 
      
      (
      <View>
      <TextBox title='Name'   hint='Enter your name' changeText={setName}/>
      <TextBox title='Email Address'  hint='Enter your email address' changeText={setEmail}
      />
      </View>
      )
  }
  
  {/*
  <TextBox title='Referral Code (Optional)' hint='Add referral code (optional)' icon='smile'/>
  */}
  <View style={Styles.submitButton}>
  
</View>
</ScrollView> 
<View style={{marginVertical: 3,backgroundColor: Colors.primary,borderRadius: 7,alignSelf: 'center'}} >
  <SubmitButton text= {edit ? 'Update': 'Continue' } onTouch={()=>aboutSubmit()}  />
</View>
</View>);


 
}

const style = StyleSheet.create({
  mainContainer: {
      ...StyleSheet.absoluteFill,
      backgroundColor: 'white',

  },
  text:{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      marginTop: 10,
      margin: '5%'
  }
});

export default App;