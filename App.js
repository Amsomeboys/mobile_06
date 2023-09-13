import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from './src/screens/HomeScreen';
import ShowScreen from './src/screens/ShowScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTintColor:"#fff",
          headerStyle : {
            backgroundColor:"#8c2641"
          }
        }}  
      >
        <Stack.Screen name="Home" component={HomeScreen}options={{
          title:"Restaurant Search",
          headerTintColor: "#fff",
          headerStyle:{
            backgroundColor:"#8c2641",
          },
        }}/>
        <Stack.Screen name="Show" component={ShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
