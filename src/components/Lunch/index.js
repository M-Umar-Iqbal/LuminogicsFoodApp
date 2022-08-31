import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import getStyles from './style';
import LunchCard from '../commons/lunchCard';
import {useBackHandler} from '@react-native-community/hooks';
import OrderDetail from '../commons/orderDetails';
import URL, {colors} from '../../constants/constants';
import axios from 'axios';
import LoadingIndicator from '../commons/loadingIndicator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LunchSkeleton from '../../components/commons/skeleton/lunchskeleton';
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
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getAll();
  }, [refreshing]);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(100).then(() => setRefreshing(false));
  }, []);

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
      <View flex={2}>
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
      </View>
      {Data.length !== 0 ? (
        <View flex={8} style={{marginLeft: 16, marginRight: 16}}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {Data.map((e, index) => (
              <LunchCard
                key={index}
                Name={e.employeeName}
                paidAmount={e.amount}
                totalRoti={e.rotiQuantity}
                description={e.extras}
                img={e.employeeImageURL}
              />
            ))}
          </ScrollView>
        </View>
      ) : (
        <View flex={8}>
          {/* <LoadingIndicator title={checkData === null ? true : false} /> */}
          <LunchSkeleton />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
