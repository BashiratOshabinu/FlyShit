import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity,Image, TextInput, Dimensions, ImageBackground, } from "react-native";
import { useEffect, useState, useCallback } from "react";
import * as Font from 'expo-font';
import { Caveat_400Regular, Caveat_500Medium } from '@expo-google-fonts/caveat';
import { Creepster_400Regular } from '@expo-google-fonts/creepster';
import { Whisper_400Regular } from '@expo-google-fonts/whisper';


export function Login({ navigation }) {
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
   
    <ImageBackground source={{uri:"https://images.pexels.com/photos/11111767/pexels-photo-11111767.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}}
    style={styles.container}>

          <SafeAreaView >
          <View>
          <Text style={{ color:'#CC9966', fontSize: 50, fontFamily:"Creepster_400Regular", marginBottom:20}}>Welcome Back</Text>
          <View style={{ alignItems:"center", marginBottom: 100}}>
          <TextInput
                       placeholder='Email Address'
                       style={{borderWidth: 1, padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'rgba(255, 255, 255, 0)', width: 350, marginBottom:20, alignItems: 'center', borderColor:'white' }}
                       placeholderTextColor={'white'}/>
            <TextInput
                       placeholder='Password'
                       style={{borderWidth: 1, padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'rgba(255, 255, 255, 0)', width: 350, marginBottom:20, alignItems: 'center', borderColor:'white'}}
                       placeholderTextColor={'white'}/>
            <TouchableOpacity style={{backgroundColor: '#CC9966',borderRadius: 15,padding: 10,borderWidth: 1, width: 200, alignItems: 'center'}}
            onPress={() => navigation.navigate("Dashboard")} >   
            <Text style={{ color:'white', fontSize: 30, fontFamily:"Creepster_400Regular"}}>Login</Text>
            </TouchableOpacity>

             <TouchableOpacity>          
             <Text style={{ color:'white',borderWidth: 1,}}>Forgot Password ?</Text>
             </TouchableOpacity>
             </View>
          </View>
          </SafeAreaView>
        
            </ImageBackground>
           
  
  )}
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: Platform.OS == "android" ? StatusBar.currentHeight: 0,
      padding: 20,
      justifyContent: "flex-end"
    },
    
  })