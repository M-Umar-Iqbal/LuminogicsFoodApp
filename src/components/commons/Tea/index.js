import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useBackHandler} from '@react-native-community/hooks';
import OrderDetail from '../orderDetails';
import FlatDataList from '../flatList';
import LoadingIndicator from '../loadingIndicator';
import URL from '../../../constants/constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const today = new Date();
const TeaGenerateReport = ({navigation, API, title}) => {
  const [totalCup, setTotalCup] = useState(0);
  const [halfCup, setHalfCup] = useState(0);
  const [fullCup, setFullCup] = useState(0);
  const [checkData, setCheckData] = useState();
  const [Data, setData] = useState([]);
  function confirmExit() {
    navigation();
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

  const [refreshing, setRefreshing] = React.useState(false);

  async function getAll() {
    const token = await AsyncStorage.getItem('token');

    let res = await axios.get(`${URL}${API}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    if (
      res?.data?.metadata?.status === 'SUCCESS' &&
      res?.data?.metadata?.message === 'No Record Found'
    ) {
      setCheckData(null);
      res?.data?.metadata?.status;
    } else {
      setTotalCup(res?.data?.payload?.data?.TotalCups);
      setData(res?.data?.payload?.data?.orders);
      setHalfCup(res?.data?.payload?.data?.HalfCups);
      setFullCup(res?.data?.payload?.data?.FullCups);
      setCheckData(res?.data?.metadata?.status);
    }
  }

  return (
    <View flex={1} style={{backgroundColor: '#ffffff'}}>
      <OrderDetail
        title={title}
        date={
          today.getDate() +
          '/' +
          (today.getMonth() + 1) +
          '/' +
          today.getFullYear()
        }
        item="Cups"
        total={totalCup}
        fullCups={fullCup}
        halfCups={halfCup}
      />
      <View flex={7.5}>
        {Data.length !== 0 ? (
          <FlatDataList Data={Data} />
        ) : (
          <LoadingIndicator title={checkData === null ? true : false} />
        )}
      </View>
    </View>
  );
};
export default TeaGenerateReport;
