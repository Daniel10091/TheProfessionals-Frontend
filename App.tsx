import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/components/screens';

import appConfig from './config/app.config';
import Navigation from './src/components/modules/Navigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style={appConfig.statusBarStyle} />
      <Stack.Navigator>
        <Stack.Screen 
          name="Navigation" 
          component={Navigation} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
      {/* <Navigation/> */}
    </NavigationContainer>
  );
}
