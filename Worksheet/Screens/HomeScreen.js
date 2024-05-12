import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity,Image, TextInput, Dimensions,KeyboardAvoidingView } from "react-native";
import { LandingPage } from "./LandingPage";
import { useEffect, useState, useCallback } from "react";
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup'
import * as Font from 'expo-font';
import { Dashboard } from "./Dashboard";
import { AppContext } from '../Compnents/globalVariable';
import { useContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, } from 'firebase/auth';
import { authenthication, db } from '../Firebase/settings'
import { collection, setDoc, doc } from 'firebase/firestore';



const validation = yup.object({
  email: yup.string()
    .required()
    .email("Enter a valid email")
    .min(5)
    .max(30),
  password: yup.string().required().min(6).max(20),
  firstName: yup.string().required().min(1).max(15),
  lastName: yup.string().required().min(1).max(15)
})


 export function HomeScreen({navigation, route}) {
  const { setPreloader } = useContext(AppContext)
  console.log(route.params)

  const { setUserUID } = useContext(AppContext)
  return (
  
         <View style={styles.container} >
         <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <View style={{ flex: 1 }}>
                        </View>
                      <Text style={{fontSize: 40, color: 'black', fontWeight: 'bold', alignSelf: 'flex-start', textAlign:"left", fontFamily: "Creepster_400Regular", color:"white", alignSelf:"center"}}>CREATE ACCOUNT</Text>
      
                      
                      <Formik
                  initialValues={{ email: "", password: "", firstName: "", lastName: "", location: "", }}
                  onSubmit={(value) => {
                    setPreloader(true)
                    //console.log(value)
                    createUserWithEmailAndPassword(authenthication, value.email, value.password)
                      .then(() => {
                        onAuthStateChanged(authenthication, (user) => {
                          const userUID = user.uid
                          setUserUID(userUID)
                          setDoc(doc(db, "users", userUID), {
                            email: value.email,
                            firstName: value.firstName,
                            lastName: value.lastName,
                            location: value.location,
                            accountStatus: "active",
                            image: null
                          }).then(() => {
                            setPreloader(false)
                          })
                          navigation.navigate("Dashboard")
                        })
                      })
                      .catch((error) => {
                        console.log(error);
                        setPreloader(false)
                        Alert.alert(
                          "Message",
                          ErrorMessage(error.code),
                          [{ text: "Try Again" }]
                        )
                      })
                  }}
                  validationSchema={validation}
                >
                  {(prop) => {
                      return (
                       
                
                      <View style={{  alignItems: 'center'}}>
                      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: "center", marginBottom: 10, fontFamily: "Creepster_400Regular", color:"white"}}>Signup</Text>
                      <TextInput
                       placeholder='First Name'
                       style={{ padding: 10, borderRadius: 20, fontSize: 20, backgroundColor: 'gray', width: 350, marginBottom:20, alignItems: 'center',color:"white" }}
                       placeholderTextColor={"white"} 
                       onChangeText={prop.handleChange("firstName")}
                       onBlur={prop.handleBlur("firstName")}
                       value={prop.values.firstName} />
                        <TextInput
                       placeholder='Last Name'
                       style={{ padding: 10, borderRadius: 20, fontSize: 20, backgroundColor: 'gray', width: 350, marginBottom:20, alignItems: 'center', color:"white"  }}
                       placeholderTextColor={"white"}
                       onChangeText={prop.handleChange("lastName")}
                       onBlur={prop.handleBlur("lastName")}
                       value={prop.values.lastName} />
                      <TextInput
                       placeholder='Email address'
                       style={{ padding: 10, borderRadius: 20, fontSize: 20, backgroundColor: 'gray', width: 350, marginBottom:20, alignItems: 'center', color:"white"  }}
                       placeholderTextColor={"white"}
                       autoCapitalize='none'
                          onChangeText={prop.handleChange("email")}
                          onBlur={prop.handleBlur("email")}
                          value={prop.values.email} />
                        <Text style={{ color: "red", display: prop.errors.email ? "flex" : "none" }}>{prop.errors.email}</Text>
                        <TextInput
                       placeholder='Location'
                       style={{ padding: 10, borderRadius: 20, fontSize: 20, backgroundColor: 'gray', width: 350, marginBottom:20, alignItems: 'center', color:"white" }}
                       placeholderTextColor={"white"}
                       onChangeText={prop.handleChange("location")}
                       onBlur={prop.handleBlur("location")}
                       value={prop.values.location} />
                      <TextInput
                       placeholder='Password'
                       style={{ padding: 10, borderRadius: 20, fontSize: 20, backgroundColor: 'gray', width: 350, marginBottom:20, alignItems: 'center', color:"white" }}
                       placeholderTextColor={"white"}
                       autoCapitalize='none'
                       secureTextEntry
                       onChangeText={prop.handleChange("password")}
                       onBlur={prop.handleBlur("password")}
                       value={prop.values.password} />
                      <Text style={{ color: "red", display: prop.errors.password ? "flex" : "none" }}>{prop.errors.password}</Text>
                      <TouchableOpacity onPress={prop.handleSubmit} >
                      <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: "center", marginBottom: 20, backgroundColor: 'white', padding:10, width: 350,fontFamily: "Creepster_400Regular",  color:"black" }} >Create Account</Text>
                      </TouchableOpacity>
                      <Text style={{color:"white"}}>by selecting create account you agree to our privacy policies and term & conditions.</Text>
                      </View>
                      
                          )
                        }}
                      </Formik>
                      </KeyboardAvoidingView> 

          </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    margin: Platform.OS == "android" ? StatusBar.currentHeight : null,
    justifyContent: "flex-end" ,
    backgroundColor: "black"
   
   
    
  },
});
