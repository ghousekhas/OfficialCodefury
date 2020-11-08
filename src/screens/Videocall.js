import React, { useEffect, useState } from 'react';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
import firestore from '@react-native-firebase/firestore';

export default function Videocall({name,email,roomId}){
  const [userDet,setUserDet] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          const url = 'https://meet.jit.si/'+roomId;
          const userInfo = {
            displayName: name,
            email: email,
            avatar: 'https:/gravatar.com/avatar/abc123',
          };
          JitsiMeet.call(url, userInfo);
          /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
          /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
        }, 1000);
        firestore().collection('Users').doc(roomId).get()
        .then((value)=>{
          setUserDet(value.data());
        })
      }, [])
    
      useEffect(() => {
        return () => {
          JitsiMeet.endCall();
        };
      });
    
      function onConferenceTerminated(nativeEvent) {
        /* Conference terminated event */
        firestore().collection('Users').doc(roomId)
          .delete().then((value)=>{
            firestore().collection('Users').doc(roomId)
            .set({
              location: userDet.location,
              profession: userDet.profession
            });
          });
        console.log(nativeEvent)
      }
    
      function onConferenceJoined(nativeEvent) {
        /* Conference joined event */
        console.log(nativeEvent)
      }
    
      function onConferenceWillJoin(nativeEvent) {
        /* Conference will join event */
        console.log(nativeEvent)
      }
      return (
        <JitsiMeetView
          onConferenceTerminated={e => onConferenceTerminated(e)}
          onConferenceJoined={e => onConferenceJoined(e)}
          onConferenceWillJoin={e => onConferenceWillJoin(e)}
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
          }}
        />
      )
}