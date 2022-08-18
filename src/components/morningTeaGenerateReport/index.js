import React, {useEffect, useState} from 'react';
import {Text, View, Alert, ScrollView, Button} from 'react-native';
import getStyles from './style';
import {useBackHandler} from '@react-native-community/hooks';
import OrderDetail from '../commons/orderDetail';
import FlatDataList from '../commons/flatList';

import URL from '../../constants/constants';
import axios from 'axios';
const TeaGenerateReport = ({navigation: {goBack}}) => {
  const styles = getStyles();
  const [totalCup, setTotalCup] = useState(0);
  const [date, setDate] = useState(null);
  const [Data, setData] = useState([]);
  function confirmExit() {
    goBack();
    return true;
  }
  useBackHandler(confirmExit);

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    let res = await axios.get(
      `${URL}/api/admin/get-available-orders/Morning-Tea`,
    );
    setTotalCup(res?.data?.payload?.data?.total);
    setDate(res?.data?.payload?.data?.orders[0].orderDate);
    setData(res?.data?.payload?.data?.orders);
  }

  return (
    <View flex={1}>
      <OrderDetail
        title="Morning Tea Requirements"
        date={date}
        item="Cups"
        total={totalCup}
      />
      <View flex={7.5}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            padding: 15,
          }}>
          <View style={{width: '50%'}}>
            <Text style={styles.header}>Name</Text>
          </View>
          <View style={{width: '35%', alignItems: 'center'}}>
            <Text style={styles.header}>Quantity</Text>
          </View>
          <View style={{width: '15%', alignItems: 'center'}}>
            <Text style={styles.header}>Sugar</Text>
          </View>
        </View>
        <FlatDataList Data={Data} />
      </View>
    </View>
  );
};
export default TeaGenerateReport;
