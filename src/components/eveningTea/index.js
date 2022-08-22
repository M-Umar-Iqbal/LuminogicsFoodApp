import React, {useEffect, useState} from 'react';

import Tea from '../commons/Tea';
const TeaGenerateReport = ({navigation: {goBack}}) => {
  return (
    <Tea
      API="/api/admin/get-available-orders/Evening-Tea"
      title="Evening Tea Requirements"
      navigation={goBack}
    />
  );
};
export default TeaGenerateReport;
