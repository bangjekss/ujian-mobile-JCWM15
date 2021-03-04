import {Button, Container, Content, Icon} from 'native-base';
import React, {useState, useEffect} from 'react';

import {View, Text, Dimensions, Image} from 'react-native';
import {Divider} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {logo} from '../../assets';

const HomeScreen = ({navigation}) => {
  console.log(navigation);
  const {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = useSelector((state) => state.coronaReducer);
  return (
    <Container>
      <Content>
        <View
          style={{
            backgroundColor: 'rgb(221, 81, 69)',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            elevation: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View onPress={() => navigation.toggleDrawer()}>
              <Icon
                onPress={() => navigation.toggleDrawer()}
                type="FontAwesome5"
                name="bars"
                style={{fontSize: 20}}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Covid-19</Text>
            </View>
            <View>
              <Icon type="FontAwesome5" name="bell" style={{fontSize: 20}} />
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Corona Virus Live Update
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: 'rgb(0, 34, 82)',
                height: Dimensions.get('screen').width / 3.5,
                width: Dimensions.get('screen').width / 3.5,
                padding: 10,
              }}>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Total
                </Text>
              </View>
              <View>
                <Divider
                  style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    marginTop: 3,
                    marginBottom: 10,
                  }}
                />
              </View>
              <View>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                  <Text style={{color: 'white'}}>{TotalConfirmed}</Text>
                </View>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                  <Text style={{color: 'white'}}>+{NewConfirmed}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: 'rgb(30, 211, 95)',
                height: Dimensions.get('screen').width / 3.5,
                width: Dimensions.get('screen').width / 3.5,
                padding: 10,
              }}>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Recovered
                </Text>
              </View>
              <View>
                <Divider
                  style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    marginTop: 3,
                    marginBottom: 10,
                  }}
                />
              </View>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Text style={{color: 'white'}}>{TotalRecovered}</Text>
              </View>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Text style={{color: 'white'}}>+{NewRecovered}</Text>
              </View>
            </View>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: 'maroon',
                height: Dimensions.get('screen').width / 3.5,
                width: Dimensions.get('screen').width / 3.5,
                padding: 10,
              }}>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Deaths
                </Text>
              </View>
              <View>
                <Divider
                  style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    marginTop: 3,
                    marginBottom: 10,
                  }}
                />
              </View>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Text style={{color: 'white'}}>{TotalDeaths}</Text>
              </View>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Text style={{color: 'white'}}>+{NewDeaths}</Text>
              </View>
            </View>
            {/* <FlatList /> */}
          </View>
        </View>
        <View style={{backgroundColor: 'white', padding: 20}}>
          <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Health Tips</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            <View
              style={{
                margin: 5,
                borderWidth: 2,
                borderRadius: 20,
                elevation: 1,
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/uGIDUOF.png'}}
                style={{
                  // borderWidth: 5,
                  height: Dimensions.get('screen').width / 4,
                  width: Dimensions.get('screen').width / 4,
                  borderRadius: 20,
                }}
              />
            </View>
            <View
              style={{
                margin: 5,
                borderWidth: 2,
                borderRadius: 20,
                elevation: 1,
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/uGIDUOF.png'}}
                style={{
                  // borderWidth: 5,
                  height: Dimensions.get('screen').width / 4,
                  width: Dimensions.get('screen').width / 4,
                  borderRadius: 20,
                }}
              />
            </View>
            <View
              style={{
                margin: 5,
                borderWidth: 2,
                borderRadius: 20,
                elevation: 1,
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/uGIDUOF.png'}}
                style={{
                  // borderWidth: 5,
                  height: Dimensions.get('screen').width / 4,
                  width: Dimensions.get('screen').width / 4,
                  borderRadius: 20,
                }}
              />
            </View>
            <View
              style={{
                margin: 5,
                borderWidth: 2,
                borderRadius: 20,
                elevation: 1,
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/uGIDUOF.png'}}
                style={{
                  // borderWidth: 5,
                  height: Dimensions.get('screen').width / 3.5,
                  width: Dimensions.get('screen').width / 3.5,
                  borderRadius: 20,
                }}
              />
            </View>
            <View
              style={{
                margin: 5,
                borderWidth: 2,
                borderRadius: 20,
                elevation: 1,
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/uGIDUOF.png'}}
                style={{
                  // borderWidth: 5,
                  height: Dimensions.get('screen').width / 3.5,
                  width: Dimensions.get('screen').width / 3.5,
                  borderRadius: 20,
                }}
              />
            </View>
            <View
              style={{
                margin: 5,
                borderWidth: 2,
                borderRadius: 20,
                elevation: 1,
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/uGIDUOF.png'}}
                style={{
                  // borderWidth: 5,
                  height: Dimensions.get('screen').width / 3.5,
                  width: Dimensions.get('screen').width / 3.5,
                  borderRadius: 20,
                }}
              />
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default HomeScreen;
