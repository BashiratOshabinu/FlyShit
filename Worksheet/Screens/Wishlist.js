import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Import the trash icon from font awesome
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/settings";
import { AppContext } from "../Compnents/globalVariable";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export function Wishlist({navigation}) {
  const [wishlistData, setWishlistData] = useState([]); 

  const handleRemoveItem = (id) => {
    const updatedWishlistData = wishlistData.filter(item => item.id !== id);
    setWishlistData(updatedWishlistData); 
  };


    useEffect(() => {
      async function getWishlistItems() {
        const clothes = collection(db, "wishlist");
        const querySnapshot = await getDocs(clothes);
        const allData = [];
        querySnapshot.forEach((item) => {
          allData.push({ ...item.data(), id: item.id, count: 1 });
        });
        setWishlistData(allData);
      }
      getWishlistItems();
    }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"black" }}>
      <View style={styles.container}>
        <FlatList
          data={wishlistData}
          renderItem={({ item }) => {
            return (
              <View>
                
               
                  <View style={{  alignItems: "center", marginVertical: 10 }}>
                <Image source={{ uri: item.image1 }} style={{ width: 700, height: 700, resizeMode: "contain" }} />
                <TouchableOpacity onPress={()=> navigation.navigate("Productsdetails", {name: item.name, brand: item.brand, price: item.price}) }>
                    <Text style={{ color: "white", fontSize:30, fontWeight:"bold"}}>{item.name}</Text>
                    <Text style={{ color: "white", fontSize:30, fontWeight:"bold"}}>{item.brand}</Text>
                    <Text style={{ color: "white",fontSize:20 }}>${item.price}</Text>
                    </TouchableOpacity>
                    </View>
                  
           
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 5,
    backgroundColor: "black"
  },
});
