import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import ImageScreen from './src/screens/ImageScreen';

const App = () => {

  const Stack = createStackNavigator();

  const MyStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerTitle: 'Home', headerTitleAlign: 'center'}} />
      <Stack.Screen name="ImageScreen" component={ImageScreen}  options={{headerTitle: 'Image Screen', headerTitleAlign: 'center'}}/>
    </Stack.Navigator>
  )
}

  return (
    // <GestureHandlerRootView>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    // </GestureHandlerRootView>
    
  );  
};

export default App;
