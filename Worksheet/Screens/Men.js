import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity,Image, TextInput, Dimensions, ScrollView, ImageBackground} from "react-native";

export function Men({navigation}){
  return(
    <SafeAreaView style={{flex:1}}>
      <ScrollView>
    <View style={styles.container} >
      <View>
    <ImageBackground style={{width: "100%", height: 700, justifyContent:"center", alignItems:"center",}} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/TACF-MO164_V6.jpg"}}>
      <TouchableOpacity onPress={() => navigation.navigate("Jackets")}>
      <Text style={{fontSize:60, padding:5,fontWeight:"bold",}}>Coats & Jackets</Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
      <View style={{flexDirection: "row", flex:1,}}>
  <View style={{flex: 1, flexDirection: "column",marginRight:10}}>
    <Image style={{width: "100%", height: 300, marginTop: 20, }} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/SMLR-MS6M_V1.jpg"}}/>
    <TouchableOpacity onPress={() => navigation.navigate("Tees")} >
    <Text style={{fontSize: 30, padding: 5, color: "black",fontWeight:"bold", alignSelf:"center"}}>Tees</Text>
    </TouchableOpacity>
  </View>
  <View style={{flex: 1, flexDirection: "column"}}>
    <Image style={{width: "100%", height: 300, marginTop: 20, }} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/BALF-MZ446_V2.jpg"}}/>
    <TouchableOpacity onPress={() => navigation.navigate("Shoes")}>
    <Text style={{fontSize: 30, padding: 5, color: "black",fontWeight:"bold",alignSelf:"center"}}>Shoes</Text>
    </TouchableOpacity>
  </View>
</View>
<View>
    <ImageBackground style={{width: "100%", height: 300, justifyContent:"flex-end", alignItems:"flex-end",}} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/45/JQUF-MA50_V1.jpg"}}>
      <TouchableOpacity onPress={() => navigation.navigate("Hats")}>
      <Text style={{fontSize:60, padding:5,fontWeight:"bold",}}>Hats</Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
      <Text style={{ fontSize: 20,padding:5}}>Wear what makes you comfortable and confident.</Text>
      <View>
    <Image style={{width: "100%", height: 600, justifyContent:"flex-end", alignItems:"flex-end",}} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/TERX-MP4_V6.jpg"}}/>
      <TouchableOpacity onPress={() => navigation.navigate("Mtrousers")}>
      <Text style={{fontSize:50, padding:5,fontWeight:"bold",}}>T r o u s e r s</Text>
      </TouchableOpacity>
      
      </View>
      <View style={{flexDirection: "row", flex:1,}}>
  <View style={{flex: 1, flexDirection: "column",marginRight:10}}>
    <Image style={{width: "100%", height: 450, marginTop: 20, }} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/z/AMIF-MF69_V4.jpg"}}/>
    <TouchableOpacity onPress={() => navigation.navigate("Shorts")}>
    <Text style={{fontSize: 30, padding: 5, color: "black",fontWeight:"bold", alignSelf:"center"}}>Shorts</Text>
    </TouchableOpacity>
    
  </View>
  <View style={{flex: 1, flexDirection: "column"}}>
  <View style={{flex: 1, flexDirection: "column"}}>
    <Image style={{width: "100%", height: 200, marginTop: 20, }} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/45s/PAVF-UY10_V2.jpg"}}/>
    <Image style={{width: "100%", height: 200, marginTop: 5, }} source={{ uri: "https://is4.fwrdassets.com/images/p/fw/45/OLKF-MA21_V1.jpg"}}/>
    <TouchableOpacity onPress={() => navigation.navigate("Baa")}>
    <Text style={{fontSize: 25, padding: 5, color: "black",fontWeight:"bold",alignSelf:"center"}}>Bags and Accessories</Text>
    </TouchableOpacity>
    </View>
  </View>
</View>
<TouchableOpacity onPress={() => navigation.navigate("See")}>
    <Text style={{fontSize: 30, padding: 5, color: "black",fontWeight:"bold", alignSelf:"center", }}>see all</Text>
    </TouchableOpacity>
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
    
   
    
  }
  
});
