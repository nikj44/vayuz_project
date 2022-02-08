import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button, ImageBackground, } from 'react-native';

const URL = 'https://dog.ceo/api/breeds/image/random';

const Home = ({navigation}) => {
    // const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState([]);
    // const [status, setStatus] = useState([]);
    var status = '';
    var data = '';

    async function dogApi() {
      await fetch(URL)
      .then((response) => response.json())
      .then((json) => {
         data = json.message 
         status = json.status
        })
      .catch((err) => alert(err))
      .finally(() =>{ 
        if(status === 'success') 
        navigation.navigate('ImageScreen', {data})
       else
         console.log('Error')
      console.log('Status',status)
      console.log(typeof(status))
      });
    }

  return (
    <View style={{flex: 1,}}>
      <ImageBackground source={require('../images/dog.jpg')} style={{flex: 1}}>
      <View style={styles.button}>
      <Button title='FETCH' onPress={() => dogApi()} style={{flex:1 }} color='#F1D00A'/>
      </View>
      </ImageBackground>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    button: {
      width: 100,
      // alignItems: 'center',
      alignSelf: 'center',
      marginTop: 300,
      borderRadius: 40,
    },

  })