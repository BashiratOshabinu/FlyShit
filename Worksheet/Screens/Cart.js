import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleMinus, faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "../Compnents/globalVariable";
import { collection, getDocs, updateDoc, doc, deleteDoc, query, where, getDoc } from "firebase/firestore";
import { db } from "../Firebase/settings";
import { useRoute } from "@react-navigation/native";

export function Cart({navigation}) {
  const { userUID, setUserInfo, userInfo, setPreloader, setDocID, setAllJobs, postID } = useContext(AppContext);
  const route = useRoute()
  const {name,image1,brand} = route.params
  // console.log(name);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // State for total price
  const [cartTotal, setCartTotal] = useState(0)
 

  const handleQuantityChange = (itemId, change) => {
    const updatedCartData = [...cartData];
    const itemIndex = updatedCartData.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      const updatedItem = { ...updatedCartData[itemIndex] };
      updatedItem.stock = Math.max(updatedItem.stock + change, 0);
      updatedItem.count = Math.max(updatedItem.count + change, 1);
      updatedCartData[itemIndex] = updatedItem;
      setCartData(updatedCartData);

      // Update cartgroupprice and total price in Firebase
      updateDoc(doc(db, "cart", itemId), {
        cartgroupprice: updatedItem.price * updatedItem.count,
      });
      calculateTotalPrice(); 
    }
  };

  const handleRemoveItem = async (itemId) => {
    const updatedCartData = [...cartData].filter((item) => item.id !== itemId);
    setCartData(updatedCartData);

    await deleteDoc(doc(db, "cart", itemId));
    calculateTotalPrice(); 
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartData.forEach((item) => {
      total += item.price * item.count;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice(); 
  }, [cartData]); 
  const [myCartTotalPrice, setMyCartTotalPrice] = useState(0);
  useEffect(() => {
    const getQ = async () => {
      const clothes = collection(db, "cart");
      const filter = query(
        clothes,
        where("userUID", "==", userUID)
      );
      const querySnapshot = await getDocs(filter);
      const allData = [];
      querySnapshot.forEach((all) => {return allData.push({...all.data(), id:all.id, count: 1})})        
      setCartData(allData)
      const sum = allData.reduce((prev, curr) => {
        return prev + curr.price;
      }, 0);
      setMyCartTotalPrice(sum);
      //console.log(myCartTotalPrice);
    };
    getQ();
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <FlatList
          data={cartData}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                  <Image source={{ uri: item.image1 }} style={{ width: 98, height: 100, resizeMode: "contain" }} />
                  <View style={{ flex: 1 }}>
                    <View style={{ justifyContent: "space-between" }}>
                    <Text style={{ color: "white", fontSize:20}}>{item.brand}</Text>
                      <Text style={{ color: "white" }}>{item.name}</Text>
                      <Text style={{ color: "white" }}>${item.price}</Text>
                      
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => handleQuantityChange(item.id, -1)}>
                          <FontAwesomeIcon icon={faCircleMinus} size={20} color="white" />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 10, color: "white" }}>{item.count}</Text>
                        <TouchableOpacity onPress={() => handleQuantityChange(item.id, 1)}>
                          <FontAwesomeIcon icon={faCirclePlus} size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity style={{marginTop:10}} onPress={() => handleRemoveItem(item.id)}>
                  <FontAwesomeIcon icon={faTrashCan} size={20} color="red" />
                </TouchableOpacity>
                </View>
              </View>

              </View>


            );
          }}
        />
        <View style={{flexDirection: "row", justifyContent:"space-between"}}>
               <Text style={{color:"white",fontSize:25, }}>Estimated price</Text>
               <Text style={{ color: "white", fontSize: 25 }}>${myCartTotalPrice}</Text>
               </View>
               <TouchableOpacity  onPress={()=> navigation.navigate("Checkout", {myCartTotalPrice,name,brand,image1})}
               style={{backgroundColor:"white", alignItems:"center",width:150,alignSelf:"center", marginTop: 10}}>
                <Text style={{ color:"black",fontSize:30,fontWeight:"800",}}>Checkout</Text>
               </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 5,
    backgroundColor:"black"
  },
});
