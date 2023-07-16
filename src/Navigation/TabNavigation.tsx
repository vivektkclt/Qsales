import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, StatusBar} from 'react-native';
import {Account, Cart, Explore, Home} from '../screens';
import CustomTab from './CustomTab';
import CommonStyles from '../Theme/CommonStyles';
import {HomeHeader} from '../components';
import Colors from '../Theme/Colors';

const HomeTabs = () => {
  const Tab = createBottomTabNavigator();
  const customTabMenu = (props: any) => {
    return <CustomTab {...props} />;
  };
  const setHomeHeader = (props: any) => {
    console.log(props?.route?.name, 'SCREEN=====');
    return <HomeHeader {...props} />;
  };
  return (
    <>
      {/* <SafeAreaView style={CommonStyles.containerFlex1}> */}
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.backgroundGray}
      />
      <Tab.Navigator
        // screenOptions={{headerShown: false}}
        screenOptions={{header: () => null}}
        tabBar={customTabMenu}>
        <Tab.Screen
          options={{header: props => setHomeHeader(props)}}
          name="HOME"
          component={Home}
        />

        <Tab.Screen name="EXPLORE" component={Explore} />
        <Tab.Screen name="CART" component={Cart} />
        <Tab.Screen name="ACCOUNT" component={Account} />
      </Tab.Navigator>
      {/* </SafeAreaView> */}
    </>
  );
};
export default HomeTabs;
