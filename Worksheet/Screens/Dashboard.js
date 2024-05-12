import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity,Image, TextInput, Dimensions, ScrollView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Creepster_400Regular } from '@expo-google-fonts/creepster';
import { useEffect, useState, useCallback, useContext } from "react";
import * as Font from 'expo-font';
import { Search } from "./Search";
import { Profile } from "./Profile";
import Carousel from 'react-native-reanimated-carousel';
import { AppContext } from "../Compnents/globalVariable";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase/settings";


const CarouselLinks = [
  "https://hips.hearstapps.com/hmg-prod/images/paris-fashion-week-fw22-tyler-joe-day-2-0155-1646320324.jpg?crop=1xw:1xh;center,top&resize=980:*",
  "https://is4.fwrdassets.com/images/p/fw/z/SAMR-WJ2_V4.jpg",
    "https://is4.fwrdassets.com/images/p/fw/z/TACF-MO164_V6.jpg",
  ]






 function Dashboard({navigation}){
   const {userUID, setPreloader, setDocID, setAllJobs, postID,setUserInfo } = useContext(AppContext)
   const width = Dimensions.get("screen").width;
   //const [userInfo, setUserInfo] = useState("")
   
  useEffect(() => {
    async function getUserInfo() {
      onSnapshot(doc(db, "users", userUID), (snapshot) => {
        if (snapshot.exists()) {
          setUserInfo(snapshot.data());
        }
      });
    }
    getUserInfo();
  }, [userUID]);
  //console.log(userInfo);

  
  return(
    <SafeAreaView style={{flex:1, backgroundColor: "black"}}>

    <ScrollView>
    <View style={styles.container} >
      <View style={{ alignItems:"flex-end" }}>
      
      <TouchableOpacity  onPress={() => navigation.navigate ("Cart")}>
      <Ionicons name='cart-sharp' size={30} style={{ color:"white"}}/>
      </TouchableOpacity>
      </View>
      <Text style={{fontSize: 40, alignSelf: "center", marginTop:10, fontFamily:'Creepster_400Regular',color:"white"}}>Elevate Your Style</Text>
     
     
      <View>
      <Image style={{width: "100%", height: 700, marginTop: 30}} source={{ uri: "https://hips.hearstapps.com/hmg-prod/images/paris-fashion-week-fw22-tyler-joe-day-2-0155-1646320324.jpg?crop=1xw:1xh;center,top&resize=980:*"}}/>
      </View>
        <TouchableOpacity onPress={() => navigation.navigate ("Women")}>
        <View style={{flexDirection: 'row', justifyContent: "space-between", padding:20}}>
      <Text style={{fontSize: 40, fontFamily:'Creepster_400Regular',color:"white"}}>Women's Outfits</Text>
      <Ionicons name='arrow-forward' size={30} style={{ color:"white"}}/>
      </View>
      </TouchableOpacity>

      
      <View>
      <Image style={{width: "100%", height: 500}} source={{ uri: "https://i.pinimg.com/736x/13/c6/3b/13c63b3ec8bb498be2498513c70f3dcf.jpg"}}/>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Shoes")}>
      <View style={{flexDirection: 'row', justifyContent: "space-between", padding:20}}>
      <Text style={{fontSize: 40, fontFamily:'Creepster_400Regular',color:"white"}}>Shoes</Text>
      <Ionicons name='arrow-forward' size={30} style={{ color:"white"}}/>
      </View>
      </TouchableOpacity>

      <View>
      <Image style={{width: "100%", height: 700}} source={{ uri: "https://i.pinimg.com/736x/d6/59/61/d65961a38fe5907257107fb08197dbef.jpg"}}/>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Men")}>
      <View style={{flexDirection: 'row', justifyContent: "space-between", padding:20}}>
      <Text style={{fontSize: 40, fontFamily:'Creepster_400Regular', color:"white"}}> Men's Outfits</Text>
      <Ionicons name='arrow-forward' size={30} style={{ color:"white"}}/>
      </View>
      </TouchableOpacity>

    </View>
    </ScrollView>
    </SafeAreaView>
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
            size = focused ? 35 : 23
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'search') {
            size = focused ? 35 : 23
            iconName = focused ? 'search' : 'search-outline';
          }else if (route.name === 'Profile') {
            size = focused ? 35 : 23
            iconName = focused ? 'person' : 'person-outline';
          }
          
            
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',

        tabBarInactiveTintColor: 'gray',

        headerShown: false,

      })}>
        <Tab.Screen name='Dash' component={Dashboard}/>
        <Tab.Screen name='search' component={Search}/>
        <Tab.Screen name='Profile' component={Profile}/>

    </Tab.Navigator>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: Platform.OS == "android" ? StatusBar.currentHeight : null,
    backgroundColor: 'black',
    
   
    
  }
  
});
