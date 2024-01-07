import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity,Image, TextInput, Dimensions } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Creepster_400Regular } from '@expo-google-fonts/creepster';
import { useEffect, useState, useCallback } from "react";
import * as Font from 'expo-font';





 function Dashboard(){
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({Creepster_400Regular });
        await Font.loadAsync({ });
        await Font.loadAsync({ });
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
    <View style={styles.container} >
      <TouchableOpacity>
      <TextInput
                       placeholder='Search'
                       style={{borderWidth: 1, padding: 5, borderRadius: 15, fontSize: 20, backgroundColor: 'rgba(255, 255, 255, 0)', width: '100%', alignSelf: 'flex-start',textAlign:"left", borderColor:'gray' }}
                       placeholderTextColor={"gray"}/>
     </TouchableOpacity>    
     <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10}}>
     <TouchableOpacity style={ styles.appBTN }>
      <Text style={{color:'black',fontSize:23, fontFamily:'Creepster_400Regular'}}>WOMEN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.appBTN }>
      <Text style={{color:'black', fontSize:23, fontFamily:'Creepster_400Regular'}}>MEN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.appBTN }>
      <Text style={{color:'black',fontSize:23, fontFamily:'Creepster_400Regular'}}>SHOES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.appBTN }>
      <Text style={{color:'black', fontSize:23, fontFamily:'Creepster_400Regular'}}>SEE ALL</Text>
      </TouchableOpacity>
    </View>            
    </View>
  )
}


const Tab = createBottomTabNavigator();

export function Dash(){
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dash') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'bars') {
            iconName = focused ? 'bars' : 'bars-outline';
          }
            
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#CC9966',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name='Dash' component={Dashboard} options={{headerShown:false}}/>
    </Tab.Navigator>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    margin: Platform.OS == "android" ? StatusBar.currentHeight : null,
    backgroundColor: 'white',
    
   
    
  },
  appBTN: {
    borderColor: '#CC9966',
    borderWidth: 1,
    backgroundColor: '#CC9966',
    borderRadius: 15,
    padding: 10, 
  }
});
