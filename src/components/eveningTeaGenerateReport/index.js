import React, {useEffect, useState} from 'react';
import {Text, View, Alert, ScrollView, Button} from 'react-native';
import getStyles from './style';
import {useBackHandler} from '@react-native-community/hooks';
import OrderDetail from '../commons/orderDetails';
import FlatDataList from '../commons/flatList';
import LoadingIndicator from '../commons/loadingIndicator';
import URL from '../../constants/constants';
import axios from 'axios';
const TeaGenerateReport = ({navigation: {goBack}}) => {
  const styles = getStyles();
  const [totalCup, setTotalCup] = useState(0);
  const [halfCup, setHalfCup] = useState(0);
  const [fullCup, setFullCup] = useState(0);

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
      `${URL}/api/admin/get-available-orders/Evening-Tea`,
    );
    setTotalCup(res?.data?.payload?.data?.TotalCups);
    setDate(res?.data?.payload?.data?.orders[0].orderDate);
    setData(res?.data?.payload?.data?.orders);
    setHalfCup(res?.data?.payload?.data?.HalfCups);
    setFullCup(res?.data?.payload?.data?.FullCups);
  }

  return (
    <View flex={1} style={{backgroundColor: '#ffffff'}}>
      <OrderDetail
        title="Evening Tea Requirements"
        date={date}
        item="Cups"
        total={totalCup}
        fullCups={fullCup}
        halfCups={halfCup}
      />
      <View flex={7.5}>
        {Data.length !== 0 ? (
          <FlatDataList Data={Data} />
        ) : (
          <LoadingIndicator />
        )}
      </View>
    </View>
  );
};
export default TeaGenerateReport;
