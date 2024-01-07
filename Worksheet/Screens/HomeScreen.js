import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity,Image, TextInput, Dimensions } from "react-native";
import { LandingPage } from "./LandingPage";
import { Caveat_400Regular, Caveat_500Medium } from '@expo-google-fonts/caveat';
import { Creepster_400Regular } from '@expo-google-fonts/creepster';
import { Whisper_400Regular } from '@expo-google-fonts/whisper';
import { useEffect, useState, useCallback } from "react";
import * as Font from 'expo-font';
import { Dashboard } from "./Dashboard";






 export function HomeScreen({navigation}) {
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
  return (
  
         
         <View style={styles.container} >
         
                      <Text style={{fontSize: 40, color: 'black', fontWeight: 'bold', alignSelf: 'flex-start', textAlign:"left", fontFamily: "Creepster_400Regular"}}>CREATE ACCOUNT</Text>
                      <View>
                        <Image style={{width:"100%", height: 300}} source={{ uri: "https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}}/>
                      </View>

                      <View style={{  alignItems: 'center'}}>
                      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: "center", marginBottom: 10, fontFamily: "Creepster_400Regular" }}>Signup</Text>
                      <TextInput
                       placeholder='FullName'
                       style={{borderWidth: 1, padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'rgba(255, 255, 255, 0)', width: 350, marginBottom:20, alignItems: 'center'  }}
                       placeholderTextColor={"black"}/>
                      <TextInput
                       placeholder='Email address'
                       style={{borderWidth: 1, padding: 10, borderRadius: 10, fontSize: 20, backgroundColor: 'rgba(255, 255, 255, 0)', width: 350, marginBottom:20, alignItems: 'center'  }}
                       placeholderTextColor={"black"}/>
                      <TextInput
                       placeholder='Password'
                       style={{borderWidth: 1, padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'rgba(255, 255, 255, 0)', width: 350, marginBottom:20, alignItems: 'center' }}
                       placeholderTextColor={"black"}/>
                      <TextInput
                       placeholder='Confirm Password'
                       style={{borderWidth: 1, padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'rgba(255, 255, 255, 0)', width: 350, marginBottom:20, alignItems: 'center', }}
                       placeholderTextColor={"black"}/>
                      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                      <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: "center", marginBottom: 20, backgroundColor: 'black', padding:10, width: 350,fontFamily: "Creepster_400Regular" }} >Create Account</Text>
                      </TouchableOpacity>
                      <Text>by selecting create account you agree to our privacy policies and term & conditions.</Text>
                      </View>

                      
          
          </View>
          
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    margin: Platform.OS == "android" ? StatusBar.currentHeight : null,
    backgroundColor: '#CC9966',
    justifyContent: "space-between" ,
   
   
    
  },
});
