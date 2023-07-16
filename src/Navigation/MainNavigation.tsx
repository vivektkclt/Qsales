import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {
  OrderSummery,
  ProductDetails,
  ProductList,
  SuccessScreen,
} from '../screens';
import CommonStyles from '../Theme/CommonStyles';
import Colors from '../Theme/Colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabs from './TabNavigation';
const MainNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <SafeAreaView
        style={[CommonStyles.containerFlex1, {backgroundColor: Colors.white}]}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={Colors.successGreen}
        />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HOME_TABS" component={HomeTabs} />
          <Stack.Screen name="PRODUCT_LIST" component={ProductList} />
          <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetails} />
          <Stack.Screen name="ORDER_SUMMERY" component={OrderSummery} />
          <Stack.Screen name="SUCCESS_SCREEN" component={SuccessScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </>
  );
};
export default MainNavigation;
