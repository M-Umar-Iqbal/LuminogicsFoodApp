import NetInfo from '@react-native-community/netinfo';
import {View, Text, ToastAndroid} from 'react-native';
import React, {Component} from 'react';
class App extends Component {
  NetInfoSubscription = null;
  constructor(props) {
    super(props);
    this.state = {
      connection_status: false,
    };
  }
  componentDidMount() {
    this.NetInfoSubscription = NetInfo.addEventListener(
      this.handleConnectivityChange,
    );
  }

  componentWillUnmount() {
    this.NetInfoSubscription && this.NetInfoSubscription();
  }

  componentDidUpdate() {
    this.state.connection_status === false ? (
      <View>
        {alert('Please Connect With an Stable Internet Connection')}
        {ToastAndroid.show(
          this.state.connection_status === false ? 'Disconnected' : 'Connected',
          ToastAndroid.SHORT,
        )}
      </View>
    ) : (
      'Connected'
    );
  }

  handleConnectivityChange = state => {
    this.setState({connection_status: state.isConnected});
  };

  render() {
    return (
      <View>
        {/* {ToastAndroid.show(
          this.state.connection_status === true ? 'Disconnected' : 'Connected',
          ToastAndroid.SHORT,
        )} */}
      </View>
    );
  }
}

export default App;
