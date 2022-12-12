import { View, Text, Button } from 'react-native'
import React,{useEffect} from 'react'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



async function onGoogleButtonPress() {

    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true }); // <-- Add this
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      // This will show you if GooglePlayServices is missing
      console.log('With high probability, GooglePlayServices are missing on this device');
      return;
    }
  }


const GoogleSignIn = () => {
    const googleSignOut=()=>{
      GoogleSignin.revokeAccess()
      GoogleSignin.signOut()
    }

      useEffect(()=>{
        GoogleSignin.configure({
          webClientId:
            '93387758913-7cpfhuc905jj0ebfddv22987jonb02s5.apps.googleusercontent.com',
        });
      },[])
      return (
        <View>
             <Button
          title="Google Sign-In"
          onPress={() => onGoogleButtonPress().then((res) => console.log(res))}
        />
             <Button
          title="Google Sign-Out"
          onPress={() => googleSignOut()}
        />
        </View>
      )
}

export default GoogleSignIn