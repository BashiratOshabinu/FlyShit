import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../../Screens/HomeScreen';
import { LandingPage } from '../../Screens/LandingPage';
import { Login } from '../../Screens/Login';
import { Dash } from '../../Screens/Dashboard';

const Stack = createNativeStackNavigator();

export function StackNavigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false}} >
        <Stack.Screen name="LandingPage" component={ LandingPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}