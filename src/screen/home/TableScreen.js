import {Container, Content, Header} from 'native-base';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {DataTable} from 'react-native-paper';

import {getCountry} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

// Region NewCases TotalCases Recovered Deaths

// "Country": "ALA Aland Islands",
//             "CountryCode": "AX",
//             "Slug": "ala-aland-islands",
//             "NewConfirmed": 0,
//             "TotalConfirmed": 0,
//             "NewDeaths": 0,
//             "TotalDeaths": 0,
//             "NewRecovered": 0,
//             "TotalRecovered": 0,
//             "Date": "2020-04-05T06:37:00Z"
const TableScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry());
  }, []);
  const {Countries} = useSelector((state) => state.coronaReducer);
  const tableHead = [
    'Region',
    'New Cases',
    'Total Cases',
    'Recovered',
    'Deaths',
  ];
  const [page, setPage] = useState(1);
  const renderTable = () => {
    const itemsPerPage = 20;
    const from = page * itemsPerPage;
    const to = (page + 1) * itemsPerPage;
    const items = [
      {
        key: 1,
        name: 'Page 1',
      },
      {
        key: 2,
        name: 'Page 2',
      },
      {
        key: 3,
        name: 'Page 3',
      },
      {
        key: 4,
        name: 'Page 4',
      },
      {
        key: 5,
        name: 'Page 5',
      },
      {
        key: 6,
        name: 'Page 6',
      },
      {
        key: 7,
        name: 'Page 7',
      },
      {
        key: 8,
        name: 'Page 8',
      },
      {
        key: 9,
        name: 'Page 9',
      },
      {
        key: 10,
        name: 'Page 10',
      },
      {
        key: 11,
        name: 'Page 11',
      },
      {
        key: 12,
        name: 'Page 12',
      },
      {
        key: 13,
        name: 'Page 13',
      },
    ];

    console.log(page, from, to, itemsPerPage);

    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Region</DataTable.Title>
          <DataTable.Title>New Cases</DataTable.Title>
          <DataTable.Title>Total Cases</DataTable.Title>
          <DataTable.Title>Recovered</DataTable.Title>
          <DataTable.Title>Deaths</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <FlatList
            data={Countries}
            renderItem={({item}) => (
              <View style={{flexDirection: 'row'}}>
                <DataTable.Cell>{item.Country}</DataTable.Cell>
                <DataTable.Cell numeric>{item.NewConfirmed}</DataTable.Cell>
                <DataTable.Cell numeric>{item.TotalConfirmed}</DataTable.Cell>
                <DataTable.Cell numeric>{item.TotalRecovered}</DataTable.Cell>
                <DataTable.Cell numeric>{item.TotalRecovered}</DataTable.Cell>
              </View>
            )}
          />
        </DataTable.Row>

        <DataTable.Pagination
          page={page}
          // numberOfPages={Math.floor(items.length / itemsPerPage)}
          numberOfPages={itemsPerPage}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
        />
      </DataTable>
    );
  };
  return (
    <Container>
      <Header>
        <View>
          <Text>Live Update</Text>
        </View>
      </Header>
      <Content>
        <View>{renderTable()}</View>
      </Content>
    </Container>
  );
};

export default TableScreen;
