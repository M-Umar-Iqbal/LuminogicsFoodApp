import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import getStyles from './style';
import LunchCard from '../commons/lunchCard';
import {useBackHandler} from '@react-native-community/hooks';
import OrderDetail from '../commons/orderDetails';
import URL, {colors} from '../../constants/constants';
import axios from 'axios';
import LoadingIndicator from '../commons/loadingIndicator';
export default function Lunch({navigation: {goBack}}) {
  const [Data, setData] = useState([]);
  const [totalRoti, setTotalRoti] = useState(0);
  const [date, setDate] = useState('');

  const styles = getStyles();
  function confirmExit() {
    goBack();
    return true;
  }
  useBackHandler(confirmExit);

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    let res = await axios.get(`${URL}/api/admin/get-available-orders/Lunch`);
    // console.log(res?.data?.payload?.data?.TotalRoti);

    setTotalRoti(res?.data?.payload?.data?.TotalRoti);
    setData(res?.data?.payload?.data?.orders);
    setDate(res?.data?.payload?.data?.orders[0].orderDate);
  }

  return (
    <View flex={1} style={styles.container}>
      <OrderDetail
        title="Launch Requirements"
        date={date}
        item="Roti"
        total={totalRoti}
      />
      {Data.length !== 0 ? (
        <View flex={7.5}>
          <ScrollView>
            {Data.map((e, index) => (
              <LunchCard
                key={index}
                Name={e.employeeName}
                paidAmount={e.amount}
                totalRoti={e.rotiQuantity}
                description={e.extras}
              />
            ))}
          </ScrollView>
        </View>
      ) : (
        <View flex={7.5}>
          <LoadingIndicator />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
