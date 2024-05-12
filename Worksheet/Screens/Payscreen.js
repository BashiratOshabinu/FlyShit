import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView} from 'react-native';
import React, { useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import {Paystack} from "react-native-paystack-webview";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../Compnents/globalVariable';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Firebase/settings';



export function Payscreen({navigation}){
  const  route = useRoute(); 
   const {userInfo,userUID} = useContext(AppContext)
  const {myCartTotalPrice,name,brand,image1} = route.params
 
  //console.log(userInfo);

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <ScrollView>
          <View style={styles.container}>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                columnGap: 30,
              }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesomeIcon icon={faArrowLeftLong} size={22} />
              </TouchableOpacity>
              <Text>Pay</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Paystack
                paystackKey="pk_test_218f4560ecb1cdee5e6d9e48483023bfd00694ae"
                amount={myCartTotalPrice}
                billingEmail="oshabinubashirat@gmail.com"
                firstName={userInfo.firstName}
                lastName={userInfo.lastName}
                //activityIndicatorColor="green"
                onCancel={(e) => {
                  console.log("unsuccessful");


                  // handle response here
                  navigation.goBack();
                }}
                onSuccess={(res) => {
                  
                  
                  // const targetInfo = collection(db, "orders");
                  //  const myDocumentData = {
                  //   firstName:userInfo.firstName,
                  //   lastName:userInfo.lastName,
                  //   email:userInfo.email,
                  //   amount:myCartTotalPrice,
                  //   createdAt: Number(new Date().getTime()),
                  // };
                  const AddToOrders = () => {
                    const orderInfo = collection(db, "orders");
                    const myDocumentData = {
                      userUID,
                      productName:name,
                      brand,
                      image1,
                      createdAt: Number(new Date().getTime()),
                      myCartTotalPrice,
                      name: userInfo.firstName + " " + userInfo.lastName,
                    };
                    addDoc(orderInfo, myDocumentData)
                      .then(() => {
                        navigation.goBack();
                        console.log("successful");
                      })
                      .catch(() => {
                        console.log("unsuccessful");
                      });
                  };
                  AddToOrders()
                 // console.log("successful");
                //   const myDocumentData = {
                //     targetName,
                //     amount: Number(amount) - Number(interest),
                //     remainingBalance: Number(total) - Number(amount),
                //     deliveryFee,
                //     createdAt: new Date().getTime(),
                //     userUID,
                //   };
                //   const myDocRef3 = collection(db, "targetDetails");
                //   setPreloader(false);
                //   addDoc(myDocRef3, myDocumentData)
                //     .then(() => {
                //       setPreloader(false);
                    
                //       navigation.goBack();
                //     })
                //     .catch(() => {
                //       setPreloader(false);
                //       Toast.show("Transaction Declined!!", {
                //         duration: Toast.durations.LONG,
                //       });
                //       navigation.goBack();
                //       //console.log("unsuccessful");
                //     });

                //   const myDocumentData2 = {
                //     balance: Number(amountRaised) - Number(userInfo.balance),
                //   };
                //   const docRef = doc(db, "users", userUID);
                //   setPreloader(false);
                //   setDoc(docRef, myDocumentData2, { merge: true })
                //     .then(() => {
                //       setPreloader(false);
                //       navigation.goBack();
                //       //console.log("successful");
                //     })
                //     .catch(() => {
                //       setPreloader(false);
                //       //console.log("unsuccessful");
                  //  });
                }}
                autoStart={true}
              />
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },});