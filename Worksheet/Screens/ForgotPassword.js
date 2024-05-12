import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from "../Compnents/globalVariable";
import { Formik } from 'formik'
import * as yup from "yup"
import { sendPasswordResetEmail } from 'firebase/auth'
import { authentication } from '../Firebase/settings'


const validationSchema = yup.object({
  email: yup.string().required().min(5).max(100).email(),
  password: yup.string().required().min(6).max(20)
})

export function ForgotPassword({ navigation, route }) {
  // console.log(route.params.metaData)
  const { setPreloader } = useContext(AppContext)
  const [email, setEmail] = useState("")

  function passwordReset() {
    setPreloader(true)
    sendPasswordResetEmail(authentication, email).then(() => {
      setPreloader(false)
      Alert.alert(
        "Password reset",
        "A password reset link has been sent to your mail",
      );
    }).catch((e) => {
      console.log(e);
      setPreloader(false)
      // Alert.alert(
      //     "Password Reset",

      // );
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, color:"black"}} >
      <View style={styles.container}>

        <View style={styles.form}>
          <Text style={styles.header}>Forgot account</Text>
          <Text style={[styles.header, { marginBottom: 20 }]}>Password?</Text>
          <Text style={styles.placeholder}>Please enter your account email, and a password reset link will be sent to your email.</Text>

          <Text style={styles.placeholder}>Email Address</Text>
          <TextInput
            style={[styles.input, { marginBottom: 10 }]}
            autoCapitalize="none"
            onChangeText={(inp) => setEmail(inp)}
          />

          <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")} style={styles.appBTN}>
            <Text style={{ fontSize: 16, color: "black", }}>Send Link</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontSize: 16, color:"white",  }}>Remember your password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center"
  },
  header: {
    fontSize: 35,
    color: "white"
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    width: "100%",
    fontSize: 18,
    color:"white"
  },
  placeholder: {
    marginTop: 10,
    color:"white"
  },
  error: {
    color: "#d70000",
    marginStart: 7
  },
  appBTN: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: "white"}
})