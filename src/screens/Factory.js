import * as React from 'react'
import {Text,Button,Image,TouchableOpacity,Dimensions,StyleSheet,View, Animated, Alert,PermissionsAndroid} from 'react-native';
import MapView, {Marker} from 'react-native-maps'
import { Directions, TextInput, ScrollView, FlatList } from 'react-native-gesture-handler';
import SubmitButton from '../components/SubmitButton';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import GeoLocation from '@react-native-community/geolocation';
import Axios from 'axios';
import {dimen, Styles} from '../Constants';
import firestore from '@react-native-firebase/firestore'

import qs from 'qs';
import LottieView from 'lottie-react-native';
import {Config} from  '../Constants';
import Videocall from './Videocall';

var data=[];
var phnos=[];

export default function Factory({details,name}){
    const [extradata,setExtraData]=React.useState(Math.random(0.2));
    const [type,setType] = React.useState(details.types);
    const [ind,setInd]=React.useState(-1);

    React.useEffect(()=>{
        firestore().collection('Users')
            .onSnapshot((value)=>{
                value.docs.forEach((document)=>{
                    const dataa = document.data();
                    console.log(dataa);
                    console.log(type);
                    console.log(dataa.location.title);
                    type.forEach((p)=>{
                        if(dataa.profession === p ){
                            data.push(dataa);
                            phnos.push(document.id);
                        }
                    })
                    
                });
                setExtraData(Math.random(0.2));
            });
    },[]);

    const scheduleMeeting =(i)=>{
        firestore().collection('Users').doc(phnos[i])
            .set({
                ...data[i],
                meeting: name
            }).then(()=>{
                setInd(i);
               
            })
        
        phnos[i]

    }

    if(ind>=0)
        return ( <Videocall name={name} email={'name'+'@gamil.com'} roomId={phnos[ind]}/>);


    return (<View style={{...StyleSheet.absoluteFill}}>
        <FlatList
        data={data}
        extraData= {extradata}
        renderItem={({item,index})=>{
            return (
                <View style={{width: dimen.width*0.9,alignSelf: 'center',backgroundColor: 'white',borderRadius:20,marginTop: 10}}
                    onTouchEnd={()=>{
                        scheduleMeeting(index);
                    }}
                >
                    <Text style={{...Styles.subbold,padding: 20}}>{item.profession}</Text>
                    <Text style={{...Styles.subbold,padding: 20,margin: 10}}>{item.location.title}</Text>
                
                </View>
            );
        }}
            />
    </View>)
}