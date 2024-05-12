import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../../Screens/HomeScreen';
import { LandingPage } from '../../Screens/LandingPage';
import { Login } from '../../Screens/Login';
import { Dash } from '../../Screens/Dashboard';
import { Women } from '../../Screens/Women';
import { Men } from '../../Screens/Men';
import { Search } from '../../Screens/Search';
import { Profile } from '../../Screens/Profile';
import { Shoes } from '../../Screens/Shoes';
import { See } from '../../Screens/See';
import { Fjackets } from '../../Screens/Fjackets';
import { Jackets } from '../../Screens/Jackets';
import { Productsdetails } from '../../Screens/Productsdetails';
import { Dresses } from '../../Screens/Dresses';
import { Tops } from '../../Screens/Tops';
import { ActiveWear } from '../../Screens/ActiveWear';
import { Trouser } from '../../Screens/Trouser';
import { Skirts } from '../../Screens/Skirts';
import { Newin } from '../../Screens/Newin';
import { Tees } from '../../Screens/Tees';
import { Baa } from '../../Screens/Baa';
import { Shorts } from '../../Screens/Shorts';
import { Hats } from '../../Screens/Hats';
import { Mtrousers } from '../../Screens/Mtrousers';
import { ForgotPassword } from '../../Screens/ForgotPassword';
import { ChangePassword } from '../../Screens/ChangePassword';
import { Cart } from '../../Screens/Cart';
import { Wishlist } from '../../Screens/Wishlist';
import { Checkout } from '../../Screens/Checkout';
import { Payscreen } from '../../Screens/Payscreen';
import { Orders } from '../../Screens/Orders';


const Stack = createNativeStackNavigator();

export function StackNavigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false}} >
        <Stack.Screen name="LandingPage" component={ LandingPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dash} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Women" component={Women} />
        <Stack.Screen name="Men" component={Men} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Shoes" component={Shoes} />
        <Stack.Screen name="See" component={See} />
        <Stack.Screen name="Fjackets" component={Fjackets} />
        <Stack.Screen name="Jackets" component={Jackets} />
        <Stack.Screen name="Productsdetails" component={Productsdetails} />
        <Stack.Screen name="Dresses" component={Dresses} />
        <Stack.Screen name="Tops" component={ Tops} />
        <Stack.Screen name="ActiveWear" component={ ActiveWear} />
        <Stack.Screen name="Trouser" component={ Trouser} />
        <Stack.Screen name="Skirts" component={ Skirts } />
        <Stack.Screen name=" Newin" component={ Newin } />
        <Stack.Screen name="Tees" component={ Tees } />
        <Stack.Screen name="Baa" component={ Baa } />
        <Stack.Screen name="Shorts" component={ Shorts } />
        <Stack.Screen name="Hats" component={ Hats } />
        <Stack.Screen name="Mtrousers" component={ Mtrousers } />
        <Stack.Screen name="ForgotPassword" component={ ForgotPassword } />
        <Stack.Screen name="ChangePassword" component={ChangePassword } />
        <Stack.Screen name="Cart" component={ Cart } />
        <Stack.Screen name="Wishlist" component={ Wishlist } />
        <Stack.Screen name="Checkout" component={ Checkout } />
        <Stack.Screen name="Payscreen" component={ Payscreen } />
        <Stack.Screen name="Orders" component={ Orders } />



 
      </Stack.Navigator>
    </NavigationContainer>
  );
}