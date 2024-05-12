import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LandingPage } from './Worksheet/Screens/LandingPage.js';
import { HomeScreen } from './Worksheet/Screens/HomeScreen.js';
import { Creepster_400Regular } from '@expo-google-fonts/creepster';
import { useEffect, useState, useCallback } from "react";
import { StackNavigator } from './Worksheet/Compnents/Navigation/StackNavigator.js';
import { Caveat_500Medium } from '@expo-google-fonts/caveat';
import { Whisper_400Regular } from '@expo-google-fonts/whisper';
import {Dashboard } from './Worksheet/Screens/Dashboard.js';
import * as Font from 'expo-font';
import { AppProvider } from './Worksheet/Compnents/globalVariable.js';
import { Preloader } from './Worksheet/Compnents/Preloader.js';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({Creepster_400Regular });
        await Font.loadAsync({ Caveat_500Medium});
        await Font.loadAsync({Whisper_400Regular});
        await Font.loadAsync({ });
        await Font.loadAsync({ });
        await Font.loadAsync({ });
        await Font.loadAsync({ });
        await Font.loadAsync({ });
        await Font.loadAsync({ });
        await Font.loadAsync({  });

        

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
<AppProvider>
      <Preloader/>
      <StackNavigator/>
      </AppProvider>
          </View>
  );
}

