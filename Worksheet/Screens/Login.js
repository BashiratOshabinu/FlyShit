import { useContext } from 'react';
import { View, Text, StatusBar, SafeAreaView, StyleSheet, ScrollView, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Alert } from 'react-native';
import { AppContext } from '../Compnents/globalVariable';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { authenthication } from '../Firebase/settings';

const validation = yup.object({
  email: yup.string()
    .required()
    .email("Enter a valid email")
    .min(5)
    .max(30),
  password: yup.string().required().min(6).max(20)
})

export function Login({ navigation, route }) {
  const { email, setEmail, Preloader, setPreloader, setUserUID } = useContext(AppContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{ flex: 1 }}>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                  setPreloader(true);
                  signInWithEmailAndPassword(authenthication, values.email, values.password)
                    .then(() => {
                      onAuthStateChanged(authenthication, (user) => {
                        setUserUID(user.uid);
                        setPreloader(false);
                        navigation.navigate("Dashboard");
                      })
                    })
                    .catch((error) => {
                      setSubmitting(false);
                      setPreloader(false);
                      Alert.alert(
                        "Error",
                        "Incorrect email or password.",
                        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                        { cancelable: true }
                      );
                      console.error("Login Error: ", error);
                    });
                }}
                validationSchema={validation}
              >
                {(formikProps) => (
                  <View>
                    <Text style={{ color: 'white', fontSize: 50, fontFamily: "Creepster_400Regular", marginBottom: 20 }}>Welcome Back</Text>
                    <View style={{ alignItems: "center", marginBottom: 100 }}>
                      <TextInput
                        placeholder='Email Address'
                        style={{ padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'gray', width: 350, marginBottom: 20, alignItems: 'center', borderColor: 'black', color: "white" }}
                        placeholderTextColor={'white'}
                        autoCapitalize='none'
                        onChangeText={formikProps.handleChange("email")}
                        onBlur={formikProps.handleBlur("email")}
                        value={formikProps.values.email} />
                      <Text style={{ color: "red", display: formikProps.errors.email ? "flex" : "none" }}>{formikProps.errors.email}</Text>
                      <TextInput
                        placeholder='Password'
                        style={{ padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'gray', width: 350, marginBottom: 20, alignItems: 'center', borderColor: 'black', color: "white" }}
                        placeholderTextColor={'white'}
                        secureTextEntry
                        autoCapitalize='none'
                        onChangeText={formikProps.handleChange("password")}
                        onBlur={formikProps.handleBlur("password")}
                        value={formikProps.values.password} />
                      <Text style={{ color: "red", display: formikProps.touched.password && formikProps.errors.password ? "flex" : "none" }}>{formikProps.errors.password}</Text>
                      <TouchableOpacity onPress={formikProps.handleSubmit} style={{ backgroundColor: 'white', borderRadius: 15, padding: 10, width: 200, alignItems: 'center' }} >
                        <Text style={{ color: "black", fontSize: 30, fontFamily: "Creepster_400Regular" }}>Login</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> navigation.navigate("ForgotPassword")}>
                        <Text style={{ color: 'white', marginTop: 10 }}>Forgot Password ?</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-end",
    backgroundColor: "black"
  },
});
