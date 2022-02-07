import { View, Text } from 'react-native';
import React from 'react';

const App = () => {
fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then((json) => {
  return json
})
console.log(json)

  return (
    <View>
      <Text>Hi</Text>
    </View>
  );
};

export default App;
