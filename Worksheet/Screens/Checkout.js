import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import { useRoute } from '@react-navigation/native';
import * as yup from 'yup'


export function Checkout({navigation}) {
  const [userInfo, setUserInfo] = useState("")
  // async function getUserInfo() {
  //   onSnapshot(doc(db, "users", userUID), (snapshot) => {
  //     //console.log(snapshot.data());
  //     if (snapshot.exists()) {
  //       setUserInfo(snapshot.data());
  //     }
  //   });
  // }
  const route = useRoute()
  const {myCartTotalPrice,name,image1,brand} = route.params
 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.container}>
        <Text style={styles.heading}>PAY</Text>
       
            <View >
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="grey"
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="grey"
                keyboardType="numeric"
              />
             <Text style={styles.payButtonText}>${myCartTotalPrice}</Text>
              <TouchableOpacity onPress={()=> navigation.navigate("Payscreen",{myCartTotalPrice, userInfo,name,image1,brand})}
               style={styles.payButton} >
                <Text style={styles.payButtonText}>Pay</Text>
              </TouchableOpacity>
            </View>
        
      </View>
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
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'white',
  },
  payButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
}
);
