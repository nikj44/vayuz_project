import { View, Text, Image, } from 'react-native';
import React, {useEffect, useState} from 'react';

const ImageScreen = ({route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FC4F4F'}}>
      <Text style={{fontSize: 20, fontStyle: 'normal', fontWeight: '400', marginBottom: 20}}>Dog Image</Text>
      <Image style={{height: 300, width: 300}} source={{uri: route.params.data}} resizeMode={'contain'} />
    </View>
  );
};

export default ImageScreen;
