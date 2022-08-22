import {StyleSheet, Text, View, ScrollView, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import getStyles from './style';
import LunchCard from '../commons/lunchCard';
import {useBackHandler} from '@react-native-community/hooks';
import OrderDetail from '../commons/orderDetails';
import URL, {colors} from '../../constants/constants';
import axios from 'axios';
import LoadingIndicator from '../commons/loadingIndicator';
import AsyncStorage from '@react-native-async-storage/async-storage';
const today = new Date();

export default function Lunch({navigation: {goBack}}) {
  const [Data, setData] = useState([]);
  const [totalRoti, setTotalRoti] = useState(0);
  const [checkData, setCheckData] = useState();
  const styles = getStyles();

  function confirmExit() {
    goBack();
    return true;
  }
  useBackHandler(confirmExit);

  useEffect(() => {
    getAll();
  }, refreshing);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(100).then(() => setRefreshing(false));
  }, []);
  const [refreshing, setRefreshing] = useState(false);

  async function getAll() {
    const token = await AsyncStorage.getItem('token');
    let res = await axios.get(`${URL}/api/admin/get-available-orders/Lunch`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    if (
      res?.data?.metadata?.status === 'SUCCESS' &&
      res?.data?.metadata?.message === 'No Record Found'
    ) {
      setCheckData(null);
    } else {
      setTotalRoti(res?.data?.payload?.data?.TotalRoti);
      setData(res?.data?.payload?.data?.orders);
    }
  }

  return (
    <View flex={1} style={styles.container}>
      <OrderDetail
        title="Launch Requirements"
        date={
          today.getDate() +
          '/' +
          (today.getMonth() + 1) +
          '/' +
          today.getFullYear()
        }
        item="Roti"
        total={totalRoti}
      />
      {Data.length !== 0 ? (
        <View flex={7.5} style={{marginLeft: 16, marginRight: 16}}>
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
          <LoadingIndicator title={checkData === null ? true : false} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
