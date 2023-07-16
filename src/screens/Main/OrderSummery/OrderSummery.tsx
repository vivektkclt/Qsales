/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Colors from '../../../Theme/Colors';
import {getHeight, getWidth} from '../../../Theme/Constants';
import CommonStyles from '../../../Theme/CommonStyles';
import icons from '../../../assets/icons';
import SvgIcon from '../../../assets/SvgIcon';
import {TextInputBox} from '../../../components';
import screens from '../../../Navigation/screens';

const OrderSummery = ({navigation}: any) => {
  const priceCard = (label: any, price: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
          alignSelf: 'center',
          marginBottom: 10,
        }}>
        <Text style={{fontSize: getHeight(45)}}>{label} </Text>
        <Text style={{fontSize: getHeight(45)}}>{price} </Text>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      style={[CommonStyles.containerFlex1, {backgroundColor: Colors.white}]}>
      <ScrollView style={{paddingBottom: getHeight(2)}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgIcon.BackArrow
              width={getWidth(10)}
              height={getWidth(10)}
              fill={Colors.black}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: Colors.black,
              fontSize: getHeight(35),
              marginBottom: getHeight(45),
              marginRight: 10,
              marginTop: 15,
            }}>
            Order summary
          </Text>
        </View>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              paddingBottom: 50,
              marginBottom: 20,
            }}>
            <Image
              style={{height: getHeight(28), width: getHeight(28)}}
              source={icons.check_circle}
            />
            <Text>Information ----</Text>
            <Image
              style={{height: getHeight(28), width: getHeight(28)}}
              source={icons.check_circle_gray}
            />
            <Text>Shipping ----</Text>
            <Image
              style={{height: getHeight(28), width: getHeight(28)}}
              source={icons.check_circle_gray}
            />
            <Text>Payment</Text>
          </View>
          <Text
            style={{
              fontWeight: '500',
              fontSize: getHeight(50),
              marginBottom: 10,
            }}>
            Contact info
          </Text>
          <Text
            style={{
              fontSize: getHeight(55),
              color: Colors.placeholderColor,
              marginBottom: 10,
            }}>
            Already have an account ?
            <Text style={{color: Colors.primary}}> Log in</Text>
          </Text>
          <TextInputBox placeHolder="Email" />
          <Text
            style={{
              fontWeight: '500',
              fontSize: getHeight(50),
              marginTop: 10,
              marginBottom: 10,
            }}>
            Shopping address
          </Text>
          <TextInputBox placeHolder="First name" />
          <TextInputBox placeHolder="Last name" />
          <TextInputBox placeHolder="Building number/ street number/ zone number" />
          <TextInputBox placeHolder="Place / Nearest landmark" />
          <TextInputBox placeHolder="Phone" />
          <Text
            style={{
              fontWeight: '500',
              fontSize: getHeight(50),
              marginBottom: 30,
              marginTop: 20,
            }}>
            Price details ( 2 items selected )
          </Text>

          {priceCard('Subtotal', 'QAR 288.00')}
          {priceCard('Discount', ' QAR 100.00')}
          {priceCard('Coupon discount', 'QAR 20.00')}
          {priceCard('Shipping charge', 'free')}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '95%',
              alignSelf: 'center',
              marginBottom: 10,
              marginTop: 10,
            }}>
            <Text style={{fontSize: getHeight(40), fontWeight: '500'}}>
              Total amount
            </Text>
            <Text
              style={{
                fontSize: getHeight(40),
                fontWeight: '500',
                color: Colors.primary,
              }}>
              QAR 108.00
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          {
            height: getHeight(7.9),
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.transparentBlack,
          },
          CommonStyles.shadow,
        ]}>
        <View
          style={[
            {
              height: getHeight(8),
              width: '100%',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.white,
            },
            CommonStyles.shadow,
          ]}>
          <Text style={{color: Colors.black}}>2 items selected for oder</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.successScreen)}
            style={{
              width: '90%',
              height: getHeight(18),
              backgroundColor: Colors.primary,
              marginTop: 10,
              marginBottom: 30,
              alignSelf: 'center',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.white,
                fontWeight: '500',
                fontSize: getHeight(35),
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OrderSummery;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    width: '95%',
    alignSelf: 'center',
    paddingBottom: getHeight(2),
  },
});
