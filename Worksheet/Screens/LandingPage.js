import { View, Text, StatusBar, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Whisper_400Regular } from '@expo-google-fonts/whisper';
import { Caveat_400Regular, Caveat_500Medium } from '@expo-google-fonts/caveat';
import { Creepster_400Regular } from '@expo-google-fonts/creepster';
import { Video } from 'expo-av';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




export function LandingPage({ navigation }){
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({Creepster_400Regular });
        await Font.loadAsync({ Caveat_500Medium });
        await Font.loadAsync({ Whisper_400Regular });
        await Font.loadAsync({ });
        await Font.loadAsync({ });
        await Font.loadAsync({ });
        await Font.loadAsync({ });
        await Font.loadAsync({ });
        await Font.loadAsync({ });
        await Font.loadAsync({  });

        

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return(
    <View style={{flex: 1}}>
      <View style={ styles.container} >
      <Video source={require('../../assets/BackgroundVideo.mp4')}
      style={ styles.backgroundVideo}
      volume={1.0}
      muted={false}
      resizeMode= 'cover'
      rate={1.0}
      isLooping
      shouldPlay
      ignoreSilentSwitch={'obey'}/>
      <Text style={{ fontSize: 35, fontFamily: "Creepster_400Regular", color: "white"}}>FLYSHIT</Text>
      <View style={{ alignItems: 'center',}}>
      <Text style={{ fontSize: 45, fontFamily: "Caveat_500Medium", }} >Style is more about being yourself.</Text>
        <TouchableOpacity style={ styles.appBTN }  onPress={() => navigation.navigate("Home")} >
        <View style={{flexDirection: 'row',}}>
        <Text style={{ fontSize: 20}}>Shop Now</Text>
        <FontAwesomeIcon icon={faArrowRight} size={20} />
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={{ backgroundColor: 'rgba(255, 255, 255, 0)', borderColor: 'white', borderWidth: 1, padding:10, borderRadius: 10, alignItems: 'center', width: 200, marginVertical: 5, fontFamily: "Whisper_400Regular", marginTop: 20}} 
        onPress={() => navigation.navigate("Login")} >
        <Text style={{ color: "white", fontSize: 20}}>Already have an account</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight: 0,
    padding: 20,
    backgroundColor: "black",
    justifyContent: "space-between"
  },
  backgroundVideo:{
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    flex:1
  },
  appBTN: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding:10, 
  }
})