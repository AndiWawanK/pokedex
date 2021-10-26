import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Home, Detail, Bags} from 'scenes';

const RootStack = createNativeStackNavigator();
const RootStackNavigation = () => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    <RootStack.Screen name="Home" component={Home} />
    <RootStack.Screen name="Detail" component={Detail} />
    <RootStack.Screen name="Bags" component={Bags} />
  </RootStack.Navigator>
);
const queryClient = new QueryClient();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <RootStackNavigation />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default RootNavigator;
