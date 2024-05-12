import React, { useContext, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, Image, Dimensions, ScrollView, TouchableOpacity, Alert, Share } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { addDoc, collection, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/settings";
import { AppContext } from "../Compnents/globalVariable";

export function Productsdetails({ navigation }) {
  const { userUID, setUserInfo, userInfo, setPreloader, setDocID, } = useContext(AppContext)
  const route = useRoute();

  const {name, price, brand, image1, image2, image3, availableSizes, category, items } = route.params;
  const images = [image1, image2, image3];
  const width = Dimensions.get("screen").width;

  const [heartColor, setHeartColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState("");
  const [wishlistColor, setWishlistColor] = useState('black');

  const toggleWishlist = async () => {
    const q = query(
      collection(db, "wishlist"),
      where("userUID", "==", userUID),
      where("name", "==", name)
    );
    const querySnapshot = await getDocs(q);
    const allData = [];
    querySnapshot.forEach((doc) => {
      allData.push({ ...doc.data(), wishlistID: doc.id });
    });

    if (!querySnapshot.empty) {
      // Item exists in the wishlist, remove it
      const wishlistID = allData[0].wishlistID;
      try {
        await deleteDoc(doc(db, "wishlist", wishlistID));
        setWishlistColor('black'); // Change wishlist color to black
        Alert.alert("Success", `${name} removed from wishlist`);
      } catch (error) {
        Alert.alert("Error", "Failed to remove from wishlist");
      }
    } else {
      // Item doesn't exist in the wishlist, add it
      const wishlist = collection(db, "wishlist");
      const data = {
        name,
        price: Number(price),
        category,
        userUID,
        image1,
        cartGroupPrice: Number(price),
        brand,
        image2,
        image3,
        createdAt: new Date().getTime(),
      };
      try {
        await addDoc(wishlist, data);
        setWishlistColor('red'); // Change wishlist color to red
        Alert.alert("Success", `${name} added to wishlist`);
      } catch (error) {
        Alert.alert("Error", "Failed to add to wishlist");
      }
    }
  }

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: name,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          //shared with activity type of result.activityType
        } else {
          //shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => navigation.navigate("Cart",{name,brand,image1})}>
            <Ionicons name='cart-outline' size={35} style={{ color: "white" }} />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Carousel
              loop
              width={width}
              height={Dimensions.get("screen").height * 0.7}
              autoPlay={true}
              data={images}
              scrollAnimationDuration={2000}
              renderItem={({ index }) => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                >
                  <View style={{ position: 'relative' }}>
                    <Image
                      style={{
                        width: '99%',
                        height: "100%",
                        resizeMode: "cover"
                      }}
                      source={{ uri: images[index] }}
                    />
                    <TouchableOpacity onPress={toggleWishlist} style={{ position: 'absolute', top: 10, left: 10 }}>
                      <Ionicons name='heart' size={30} style={{ color: wishlistColor }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onShare} style={{ position: 'absolute', bottom: 10, right: 10 }}>
                      <Ionicons name='share-outline' size={30} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity
                style={[
                  styles.sizeButton,
                  selectedSize === "Small" && styles.selectedSize,
                ]}
                onPress={() => handleSizeSelection("Small")}
              >
                <Text style={styles.sizeButtonText}>Small</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.sizeButton,
                  selectedSize === "Medium" && styles.selectedSize,
                ]}
                onPress={() => handleSizeSelection("Medium")}
              >
                <Text style={styles.sizeButtonText}>Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.sizeButton,
                  selectedSize === "Large" && styles.selectedSize,
                ]}
                onPress={() => handleSizeSelection("Large")}
              >
                <Text style={styles.sizeButtonText}>Large</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>{name}</Text>
            <Text style={{ color: "white", fontSize: 20 }}>{brand}</Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>${price}</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 30, padding: 10, margin: 5, alignItems: 'center' }} onPress={() => {

            const handleAddToCart = async () => {
              if (!selectedSize) {
                Alert.alert("Please Select Size", "You haven't selected a size for the item yet.", [{ text: "OK" }]);
                return;
              }
              const q2 = query(collection(db, "cart"), where("userUID", "==", userUID), where("name", "==", name));
              const querySnapshot2Doc = await getDocs(q2);

              const allDocs = [];
              querySnapshot2Doc.forEach((all) => {
                allDocs.push(all.data());
              });

              if (querySnapshot2Doc.empty === false) {
                Alert.alert("Message", "document already exists", [{ text: "OK" }])
              } else if (querySnapshot2Doc.empty === true) {
                const groupCollection = collection(db, "cart");
                const data = {
                  name,
                  price: Number(price),
                  stock: Number(1),
                  category: category,
                  userUID: userUID,
                  image1,
                  cartGroupPrice: Number(price),
                  brand,
                  image2,
                  image3,
                  createdAt: new Date().getTime(),
                };
                setPreloader(true);
                addDoc(groupCollection, data)
                  .then(() => {
                    setPreloader(false);
                    Alert.alert("Message!", `${name} added successfully`, [
                      { text: "Ok" },
                    ]);
                  })
                  .catch(() => {
                    Alert.alert("Unsuccessful", `${name} was not addedd`, [
                      { text: "Ok" },
                    ]);
                  });


              }

            }
            handleAddToCart()
          }}>
            <Text style={{ fontSize: 20 }}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    padding: 10,
    backgroundColor: "black"
  },
  sizeButton: {
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  selectedSize: {
    backgroundColor: "#f2f2f2",
  },
  sizeButtonText: {
    fontSize: 16,
    color: "black",
  },
});
