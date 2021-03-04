import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Container, Content, Input, Item, Label} from 'native-base';
import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {AUTH_SIGN} from '../../redux/type';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const handleLoginBtn = async () => {
    const user = {
      username,
      password,
    };
    await dispatch({type: AUTH_SIGN, payload: user});
    await AsyncStorage.setItem('data', username);
  };
  return (
    <Container>
      <Content>
        <View></View>
        <View>
          <View>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input onChangeText={(e) => setUsername(e)} />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input onChangeText={(e) => setPassword(e)} secureTextEntry />
            </Item>
          </View>
          <View>
            <Button onPress={handleLoginBtn}>
              <Text>Login</Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default LoginScreen;
