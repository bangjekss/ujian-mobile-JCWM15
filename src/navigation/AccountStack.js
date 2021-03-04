import {Button, Container, Content, Footer, Text} from 'native-base';
import React from 'react';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../redux/action';

const AccountStack = () => {
  const dispatch = useDispatch();
  const handleLogoutBtn = () => {
    dispatch(logoutAction());
  };
  return (
    <Container>
      <Content></Content>
      <Footer>
        <Button onPress={handleLogoutBtn}>
          <Text>Logout</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default AccountStack;
