import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity, Image, FlatList } from "react-native";
import { AppContext } from "../Compnents/globalVariable";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db } from "../Firebase/settings";
import { useNavigation } from "@react-navigation/native";

export function Jackets(
  ) {
  const navigation = useNavigation()
  const { setAllCategory, allCategory, Mjacket, setMjacket } = useContext(AppContext);
  const [mJacketID,setMJacketID] = useState("")

  const [outfits, setFilteredOutfits] = useState([]);

  useEffect(() => {
    const q = collection(db, "outfits");
    const filter = query(q, where("category", "==", "Mjacket"));
    onSnapshot(filter, (snapshot) => {
      const allData = [];
      snapshot.forEach((item) => {
        allData.push({
          ...item.data(),
          MjacketID: item.id
        });
      });

      setFilteredOutfits(allData);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <FlatList
          data={outfits}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.itemContainer} onPress={() => {navigation.navigate("Productsdetails", {
                name:item.name,
                brand:item.brand,
                price:item.price,
                image1:item.image1,
                image2:item.image2,
                image3:item.image3,
                category:item.category


              })
              setMJacketID(item.MjacketID)}}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.image1 }} style={styles.image} />
                </View>
                <Text style={{ color: "white", textAlign: "center",fontSize: 20, fontWeight:"800" }}>{item.name}</Text>
                <Text style={{ color: "white", textAlign: "center",fontSize: 20,}}>{item.brand}</Text>
                <Text style={{ color: "white", textAlign: "center",fontSize: 18,}}>${item.price}</Text>

              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.MjacketID}
          horizontal={false} 
          numColumns={2} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    padding: 5,
    backgroundColor: "black"
  },
  itemContainer: {
    flex: 1,
    margin: 5
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: "100%",
    height: 350 
  }
});
