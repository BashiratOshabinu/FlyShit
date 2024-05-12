import React, { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, Image, Dimensions, ScrollView, TouchableOpacity, Alert, Share } from "react-native";
import { AppContext } from "../Compnents/globalVariable";
import { collection } from "firebase/firestore";
import { db } from "../Firebase/settings";


export function Orders(){
  const { userInfo, userUID} = useContext(AppContext)
  // console.log(userInfo);
  const [orders, setOrders] = useState([])
  const [allImages, setAllImages] = useState(undefined);
  const [allBrands, setAllBrands] = useState(undefined);
  const [allProducts, setAllProducts] = useState(undefined);

  useEffect(() => {
    const getQ = async () => {
      const clothes = collection(db, "cart");
      const filter = query(clothes, where("userUID", "==", userUID));
      const querySnapshot = await getDocs(filter);
      const allData = [];
      querySnapshot.forEach((all) => {
        return allData.push({ ...all.data(), id: all.id, count: 1 });
      });
      const myImages = { ...allData.image1 }
      const myBrands = {...allData.brand};
      const myProducts = { ...allData.name };
      setAllProducts(myProducts);
      setAllBrands(myBrands);
      setAllImages(myImages);
      setCartData(allData);
      const sum = allData.reduce((prev, curr) => {
        return prev + curr.price;
      }, 0);
      setMyCartTotalPrice(sum);
      //console.log(myCartTotalPrice);
    };
    getQ();
  });
  // useEffect(() => {
  //   async function getQ() {
  //     const q = collection(db, "orders");
  //     const filter = query(q, where("userUID", "==", userUID));
  //     //const filter = query(q, where("firstName", "==", userInfo.firstName));
  //     const querySnapshot = await getDocs(filter);
  //     const allData = [];
  //     querySnapshot.forEach((all) => {
  //       allData.push(all.data());
  //     });
  //     setOrders(allData);
  //   }
  //   getQ();
  // });
  // console.log(orders);

  return(
    <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
      <View style={ styles.container} >
        
      </View>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },});