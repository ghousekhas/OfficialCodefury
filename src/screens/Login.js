import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,TextInput, Dimensions, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SubmitButton from '../components/SubmitButton';
import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Colors} from '../Constants'

const LoginScreen = ({navigation,route,authChanged}) => {
    const [phoneno,setPhoneno] = useState(' ');
    const [confirm,setConfirm] = useState(null);
    const [code,setCode] =useState(' ');
    const [user,setUser] =useState(null);
    const [timeout,stmots]=useState(60);

    const [pressed,setPressed] = useState(false);

    onAuthStateChanged = (user)=>{
        setUser(user);
        try{
            if(user!=null)
                route.params.getUserDetails(0,user);
        }
        catch(er){
            console.log('getparams not found in loginscreen');
        }
        
    }
    useEffect(()=>{
        const unsubscribe= auth().onAuthStateChanged(onAuthStateChanged);

    },[]);

   


    async function authenticate(re=null){
        if(phoneno.length==10){
            const confirmation= await auth().signInWithPhoneNumber('+91'+phoneno);
            console.log(confirmation);
            setConfirm(confirmation);
           
        }
        else{
            Alert.alert('Phone number invalid',"Please enter a 10 digit phone number",[{
                text: "OKAY",
                onPress: ()=>{
                    setPressed(false)

                }
            }])
        }
    }
    async function confirmCode(code){
        try{
            await confirm.confirm(code);
            //navigation.navigate('AddressSearch');
        }
        catch(error){
            
        }
        if(auth().currentUser!=null){
            setUser(auth().currentUser);
            console.log('coming through');
            authChanged(auth().currentUser);

        }
        else{
            Alert.alert('OTP incorrect ','Please try again');
        }
    }









    if(!confirm){
    return(
    <View style={LoginScreenStyle.mainContainer}>
        <View style= {{height: '87%',width: '100%'}}>
        <Text style = {LoginScreenStyle.titleStyle}>Mobile Verification</Text>
        <Text style = {LoginScreenStyle.descStyle1}>Please enter your mobile number.</Text>
        <View style = {LoginScreenStyle.phoneViewStyle}>
            <Text style={LoginScreenStyle.textyy}>+91</Text>
            <View style={LoginScreenStyle.linesep}/>
            <TextInput style = {LoginScreenStyle.textInputStyle}
                maxLength = {10}
                keyboardType = {"number-pad"}
                onChangeText = {text => setPhoneno(text)}
            />
        </View>
        <Text style = {LoginScreenStyle.descStyle2}>Don't worry, your number will not be shared with anyone.</Text>
        </View>
        <View style={LoginScreenStyle.bottom}>
            <SubmitButton styling={pressed} text='Get OTP'
            onTouch={()=>{
                setPressed(true);
                authenticate();
            }} />
        </View> 
    </View>);
    }
    return(<View style = {style.mainContainer}>
        <Text style={style.text}>We sent a '6-digit OTP' on {"\n "+ phoneno}      </Text>
        <Text style={style.desc}>Please enter the OTP below to complete the verification process. </Text>
        <OTPInputView style={LoginScreenStyle.OTPInputView
        }
        codeInputFieldStyle={LoginScreenStyle.underlineStyleBase}
        codeInputHighlightStyle={LoginScreenStyle.underlineStyleHighLighted}
            pinCount={6}
            onCodeFilled={(codec) => {
                setCode(codec);
            }}
        />
        <TouchableOpacity onPress={()=> authenticate('re')} disabled={timeout==0 ? true : false}  >
            <ResendButton/>
        </TouchableOpacity>
       <SubmitButton text='Submit'
           onTouch={()=>{
           
               if(code!=null)
                    if(code.toString().length==6)
                        confirmCode(code);
                else 
                    Alert.alert('Please fill the OTP recieved in the message');
           }}
       />
     
    </View>);

};

const ResendButton=({vaar})=>{
    const [timeout,stmots]=useState(60);
    useEffect(()=>{
       timeout>0 && setTimeout(()=>stmots(timeout-1),1000);
    },[timeout])
   
    return <Text style={{...style.resend,color: timeout>0? 'gray': Colors.primary}}>{ timeout>0 ? 'Resend OTP in '+timeout+' seconds': 'Resend OTP' }</Text>
}

const LoginScreenStyle = StyleSheet.create({
    OTPInputView:{
            width: '80%',
            height: 240,
            alignSelf: 'center'
        
    },
    
    mainContainer:{
        backgroundColor: 'white',
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    phoneViewStyle:{
        flexDirection: 'row',
        height: 45,
        width: Dimensions.get('window').width-30,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: '#5D5D5D',
        borderWidth: 1,
        borderRadius: 5
    },
    viewStyle: {
        margin: 10
        

    },
    titleStyle: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '200',
        color: 'black'
        

        

    },
    descStyle1: {
        fontSize: 12,
        color: '#5D5D5D',
        textAlign: 'center',
        padding: 3,
        marginTop: 15
    },
    descStyle2: {
        fontSize: 12,
        color: '#5D5D5D',
        textAlign: 'center',
        padding: 3,
        marginTop: 5
    },
    textInputStyle: {
        height: 45, 
        alignSelf: 'center',
        flex: 5,
        marginStart: 10,
       
       
        
       
    },
    textInputStyle1: {
      
        borderColor: 'gray',
         flex: 1, 
        fontSize: 17,
        textAlign: 'center',
        alignSelf:'center'
    },
    textyy:{
        alignSelf: 'center',
        fontSize: 15,
        flex: 1,
        padding: 5,
        textAlign: "center"
    },
    linesep:{
        height:45,
        width: 1,
        backgroundColor: 'gray'
    },
    bottom:{
        height: '13%',
        width: '100%',
  
    },
    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderColor: 'black',
        borderBottomWidth: 1,
        color: 'black'
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
      

    

});

const style = StyleSheet.create({
    mainContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        padding: 10

    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: "center",
        marginTop: 10,
        margin: 5

    },
    desc: {
        fontSize: 12,
        color: '#5D5D5D',
        textAlign: 'center',
        padding: 3,
        marginTop: 15
},
input:{
    height: 45,
    width: 45,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#5D5D5D',
    marginStart: 10,
    alignSelf:"center",
    fontSize: 20,
    color: 'gray',
    textAlign: 'center'
    
},
view:{
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    margin: 50,

    
    
},
resend: {
    fontFamily: 'sans-serif',
    color: Colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    margin: 15,

}
});

export default LoginScreen;