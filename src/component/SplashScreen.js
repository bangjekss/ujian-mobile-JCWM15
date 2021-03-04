import React, {useState, useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
      }}>
      <Image
        source={{uri: 'https://i.imgur.com/uGIDUOF.png'}}
        style={{
          height: Dimensions.get('screen').width / 1.5,
          width: Dimensions.get('screen').width / 1.5,
          borderRadius: 25,
        }}
      />
    </View>
  );
};

export default SplashScreen;
