import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity,Image, TextInput, Dimensions,ImageBackground, ScrollView } from "react-native";

export function Women({navigation}){
  return(
    <SafeAreaView style={{flex:1, backgroundColor: "black"}}>
    <ScrollView>
    <View style={styles.container} >
    <View>
      <ImageBackground style={{width: 400, height: 600, justifyContent:"flex-end", alignItems:"flex-start"}} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/MNOX-WD12_V1.jpg"}}>
      <TouchableOpacity onPress={()=> navigation.navigate("Dresses")} >
      <Text style={{fontSize:30,backgroundColor: "white", padding:5, color:"black",fontWeight:"bold",}}>Dresses</Text>
      </TouchableOpacity>
</ImageBackground>
<View style={{flexDirection: "row", flex:1,}}>
  <View style={{flex: 1, flexDirection: "column",marginRight:10}}>
    <Image style={{width: "100%", height: 300, marginTop: 20, }} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/ENZF-WS720_V1.jpg"}}/>
    <TouchableOpacity onPress={()=> navigation.navigate("Tops")}>
    <Text style={{fontSize: 30, padding: 5, color: "black",fontWeight:"bold",color:"white"}}>Tops</Text>
    </TouchableOpacity>
  </View>
  <View style={{flex: 1, flexDirection: "column"}}>
    <Image style={{width: "100%", height: 300, marginTop: 20, }} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/VARF-WI40_V4.jpg"}}/>
    <TouchableOpacity onPress={()=> navigation.navigate("ActiveWear")}>
    <Text style={{fontSize: 30, padding: 5, color: "black",fontWeight:"bold",color:"white"}}>Active Wears</Text>
    </TouchableOpacity>
  </View>
</View>
</View>
<ImageBackground style={{width: "100%", height: 600, justifyContent:"center", alignItems:"center",}} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/ACNE-WO378_V2.jpg"}}>
      <TouchableOpacity onPress={()=> navigation.navigate("Fjackets")} >
      <Text style={{fontSize:90, padding:5,fontWeight:"bold",}}>J a c k e t s</Text>
      </TouchableOpacity>
</ImageBackground>
<View style={{flexDirection: "row", flex:1,}}>
  <View style={{flex: 1, flexDirection: "column",marginRight:10}}>
    <Image style={{width: "100%", height: 300, marginTop: 20, }} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/CITI-WJ1753_V4.jpg"}}/>
    <TouchableOpacity onPress={()=> navigation.navigate("Trouser")}>
    <Text style={{fontSize: 30, padding: 5, color: "black",fontWeight:"bold",color:"white"}}>Trousers</Text>
    </TouchableOpacity>
  </View>
  <View style={{flex: 1, flexDirection: "column"}}>
    <Image style={{width: "100%", height: 300, marginTop: 20, }} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/HLSA-WQ14_V4.jpg"}}/>
    <TouchableOpacity onPress={()=> navigation.navigate("Skirts")}>
    <Text style={{fontSize: 30, padding: 5, color: "black",fontWeight:"bold",color:"white"}}>Skirts</Text>
    </TouchableOpacity>
  </View>
</View>
<View style={{flexDirection: "row", flex:1,}}>
  <View style={{flex: 1, flexDirection: "column",marginRight:10}}>
    <Image style={{width: "100%", height: 300, marginTop: 20, }} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/SLAU-WZ1167_V1.jpg"}}/>
    <TouchableOpacity onPress={()=> navigation.navigate("Shoes")}>
    <Text style={{fontSize: 30, padding: 5, color: "black",fontWeight:"bold",color:"white",alignSelf:"center"}}>Shoes</Text>
    </TouchableOpacity>
  </View>
  <View style={{flex: 1, flexDirection: "column"}}>
    <Image style={{width: "100%", height: 300, marginTop: 20, }} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/SAMR-WJ2_V4.jpg"}}/>
    <TouchableOpacity onPress={()=> navigation.navigate(" Newin")}>
    <Text style={{fontSize: 30, padding: 5, color: "black",fontWeight:"bold",color:"white",alignSelf:"center"}}>New In</Text>
    </TouchableOpacity>
  </View>
</View>


</View>
</ScrollView>
</SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: Platform.OS == "android" ? StatusBar.currentHeight : null,
    backgroundColor: "black"
   
    
  }
  
});
