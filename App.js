/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootNavigator from 'navigation';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from 'styles';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <StatusBar barStyle={'dark-content'} />
      <RootNavigator />
    </SafeAreaView>
  );
};
export default App;
