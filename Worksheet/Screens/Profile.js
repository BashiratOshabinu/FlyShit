import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity, Modal, Button } from "react-native";

export function Profile({ navigation }) { // Add navigation prop here
  const [modalVisible, setModalVisible] = useState(false); // Step 2

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"black"}}> 
      <View style={styles.container} >
        <Text style={{fontSize: 30, fontWeight: "500", alignSelf: "center",marginBottom: 30,color:"white" }}> Account</Text>
        <View style={{marginBottom: 30 }}>
          <Text style={{fontSize:40, fontFamily: "Creepster_400Regular",color:"white"}}>Hello,</Text>
          <Text style={{fontSize:40, fontFamily: "Creepster_400Regular",color:"white"}}>User</Text>
        </View>
        <View style={{justifyContent:"space-between",flex:1 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Wishlist")} style={{ flexDirection: "row",alignItems:"center"}}>
            <Ionicons name='heart' size={25} style={{ color:"white", paddingRight: 20}}/>
            <Text style={{fontSize:25,color:"white"}}>Wishlist</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{ flexDirection: "row",alignItems:"center"}}>
            <Ionicons name='card-outline' size={25} style={{color:"white", paddingRight: 20}}/>
            <Text style={{fontSize:25,color:"white"}}>Payment</Text>
          </TouchableOpacity>
         
          <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: "row",alignItems:"center"}}>
            <MaterialCommunityIcons name='logout' size={25} style={{ color:'white', paddingRight: 20}}/>
            <Text style={{fontSize:25, color:"white"}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <Button title="Yes, Logout" onPress={() => {navigation.navigate("Dashboard"); setModalVisible(false);} }/>
            <Button title="Cancel" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: Platform.OS == "android" ? StatusBar.currentHeight : null,
    backgroundColor: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
