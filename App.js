import React, { useEffect,useState } from 'react';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
import {Text,View,StyleSheet,TextInput, Dimensions, Alert,ScrollView,FlatList,Image} from 'react-native';
import Videocall from './src/screens/Videocall';
import {Styles,Constants, dimen,Colors} from './src/Constants';
import TextBox from './src/components/TextBox';
import SubmitButton from './src/components/SubmitButton';
import auth from '@react-native-firebase/auth';
import Login from './src/screens/Login';
import firestore from '@react-native-firebase/firestore';
import LocationFetch from './src/screens/LocationFetch';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Factory from './src/screens/Factory';
import messaging from '@react-native-firebase/messaging';

function App() {
  const [user, setUser] = useState( auth().currentUser);
  const [done,setDone] = useState(false); 
  const [email,setEmail] = useState('');
  const [name,setName]= useState('');
  const edit = false;
  const [location,setLocation] = useState(null);
  const [profession,setProfession] = useState(null);
  const [factory,setFactory] = useState(null);
  const [meeting,setMeeting] = useState(null);

  const retuser=()=>{
    if(user != null){
      console.log('trubg to retrieve');
      firestore().collection('Users')
        .doc(user.phoneNumber.substring(3))
        .get().then((value)=>{
          try{
          const document = value.data();
          console.log(document)
          setProfession(document.profession);
          setLocation(document.location);
          setMeeting(document.meeting);
          }
          catch(error){
            console.log('rror',error)
          }
        },()=>{
          console.log('usernonexistent');
        });
        messaging().subscribeToTopic(user.phoneNumber.substring(3)).then(()=>{
          console.log('subbed');
        })

      }
  }


  useEffect(()=>{
    const suser = auth().onAuthStateChanged(onAuthStateChanged);
    retuser();
   
    


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

    //REMOVE THIS

    const registerUser =(profession)=>{
      if(user!=null)
    firestore().collection('Users')
    .doc(user.phoneNumber.substring(3))
      .set({
        profession: profession,
        location: location

      }).then(()=>{
        console.log('something big happened');
        setProfession(profession);
      });
      console.log('heretho');

    }

    const details = [
      {
        type: "cleaning",
        image: require("./src/images/a.jpeg")
      },
      {
        type: "carpenter",
        image: require("./src/images/carpenter.jpeg")
      },
      {
        type: "driver",
        image: require("./src/images/driver.jpeg")
      },
      {
        type: "fishing",
        image: require("./src/images/fishing.jpeg")
      },
      {
          type: "pottery",
          image: require("./src/images/pottery.jpeg")
      },
      {
          type: "sculptor",
          image: require("./src/images/sculptor.jpeg")
      },
      {
          type: "shoemaker",
          image: require("./src/images/shoemaker.jpeg")
      },
      {
          type: "farmer",
          image: require("./src/images/farmers.jpeg")
      },
  ]

    const renderProf = ({item}) => {
      return(
       
          <View style={{width: dimen.width/3-10,height: dimen.width/3-10}} onTouchEnd={()=>{
            registerUser(item.type)
          }}>
             <TouchableOpacity
        onPress = {() =>{
          registerUser(item.type)
        } }
        >
          
              <Image
                resizeMethod="resize"
                style={{width: dimen.width/3-10,height: dimen.width/3-10}}
                  
                 
                  source={ item.image }
              />
               </TouchableOpacity>
              </View>
         
          
      );
  }

  if(meeting != null)
    return <Videocall name={user.phoneNumber.substring(3)} roomId={user.phoneNumber.substring(3)} email={'rand@ab.com'} />

  if(factory != null )
    return <Factory details={factory} name={name}/>
    

  if(user == null )
      return(<Login authChanged={onAuthStateChanged} setFactory={setFactory} setFacName={setName}/>)
  
  if(location == null)
    return (<LocationFetch changePataalLok={setLocation} />)

  if(profession == null)
  return ( <View style={{...StyleSheet.absoluteFill}}>
    <FlatList
        ListHeaderComponent={()=>{
          return <View style={{padding: 10,margin:10}}>
            <Text style={{...Styles.heading,alignSelf: 'center',textAlign: 'center'}}>Which of these suits you the most?</Text>
            </View>
        }}
        data={details}
        style={{width: dimen.width}}
        contentContainerStyle={{justifyContent: 'space-between',alignContent: 'space-between'}}
        renderItem={renderProf}
        keyExtractor={item => item.type}
        numColumns= {3}
    />
    </View>
);


  



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
          <TextBox title='Name' defaultValue={name}  hint='Enter your name' changeText={setName} password={true}/>
      <TextBox title='Email Address' defaultValue={email} hint='Enter your email address' changeText={setEmail}/>
      </View>
      ) : 
      
      (
      <View>
      <TextBox title='Name'   hint='Enter your name' changeText={setName} />
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