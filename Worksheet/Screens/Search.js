import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity,Image, TextInput, Dimensions, ScrollView,FlatList} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../Compnents/globalVariable";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/settings";

export function Search({navigation}){
  const { userUID, setUserInfo, userInfo, setPreloader,allOutfits,setDocID } = useContext(AppContext)
  const [search, setSearch] = useState("")
  const [filteredOutfits, setfilteredOutfits] = useState([])


  
  useEffect(() => {
    
//    setfilteredOutfits(allOutfits)

    async function getCothes() {
      const Clothes = collection(db,"outfits")
      const querysnapshot = await getDocs(Clothes)
      const allData = []
      querysnapshot.forEach((all) => {
        allData.push(all.data())
      })
      setfilteredOutfits(allData)
      //console.log(6263636);
    }

    getCothes()

}, [])

function handleSearch(inp) {
    const filtered = filteredOutfits.filter(all => {
      if(all.hasOwnProperty("name")) {
return  all.name.toLowerCase().includes(inp.toLowerCase())
      } else {
return filteredOutfits
      }
            
    })
    setfilteredOutfits(filtered)
}
  return(
    <SafeAreaView style={{flex:1, backgroundColor: "black" }}>
    <View style={styles.container} >
 
    <TextInput
                     placeholder='Search'
                     style={{borderWidth: 1, padding: 5, borderRadius: 15, fontSize: 20, backgroundColor: 'gray', width: '100%', alignSelf: 'flex-start',textAlign:"left", borderColor:'gray',marginTop:10 }}
                     placeholderTextColor={"white"}
                     onChangeText={(inp) => handleSearch(inp)}
 
/>

  { <FlatList 
  key={"_"}
            data={filteredOutfits}
            renderItem={({ item }) => {
              return(
                <ScrollView>
                  <View  >
                    <TouchableOpacity style={{marginVertical:10, flexDirection: "row", alignItems: "center", columnGap: 10}}onPress={() => {navigation.navigate("Productsdetails", {
                name:item.name,
                brand:item.brand,
                price:item.price,
                image1:item.image1,
                image2:item.image2,
                image3:item.image3,

              })
             }}>
                    <Image source={{uri: item.image1}} style={{width: 60, height: 60, resizeMode:"stretch", borderRadius: 60}}/>
                    <View>
                    <Text style={{color: "white"}}>{item.name}</Text>
                    <Text style={{color:"white" }}>$ {item.price}</Text>
                    </View>
                    </TouchableOpacity>
        
                  </View>
                </ScrollView>
              )
            }}
            keyExtractor={({ item }) => item } /> }
   </View>  
   </SafeAreaView>
   

   
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: Platform.OS == "android" ? StatusBar.currentHeight : null,
    backgroundColor: 'black',
    
  },
    
})