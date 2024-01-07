import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LandingPage } from './Worksheet/Screens/LandingPage.js';
import { HomeScreen } from './Worksheet/Screens/HomeScreen.js';
import { Creepster_400Regular } from '@expo-google-fonts/creepster';
import { useEffect, useState, useCallback } from "react";
import { StackNavigator } from './Worksheet/Compnents/Navigation/StackNavigator.js';
import { Caveat_500Medium } from '@expo-google-fonts/caveat'
import { Whisper_400Regular } from '@expo-google-fonts/whisper'
import {Dashboard } from './Worksheet/Screens/Dashboard.js'
export default function App() {
  
  return (
    <View style={{ flex: 1 }}>
      <StackNavigator/>
    </View>
  );
}

