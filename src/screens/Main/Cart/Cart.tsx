/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Colors from '../../../Theme/Colors';
import {getHeight} from '../../../Theme/Constants';
import CommonStyles from '../../../Theme/CommonStyles';
import {CartItem} from '../../../components';
import screens from '../../../Navigation/screens';

const Cart = ({navigation}: any) => {
  const cartItems = [
    {
      handle: 'wide-brim-bucket-hat-with-neck-cover-for-women',
      id: 'gid://shopify/Product/8364395331873',
    },
    {
      handle: '4l-capacity-cold-kettle-beverage-dispenser-with-faucet',
      id: 'gid://shopify/Product/8249686360353',
      isChecked: true,
    },
    {
      handle: 'foldable-shampoo-chair-for-children',
      id: 'gid://shopify/Product/8128242450721',
    },
  ];
  return (
    <View
      style={[CommonStyles.containerFlex1, {backgroundColor: Colors.white}]}>
      <View style={styles.container}>
        <View style={CommonStyles.flexRowContainer}>
          <Text
            style={{
              color: Colors.black,
              fontSize: getHeight(35),
              marginBottom: getHeight(45),
              marginRight: 10,
            }}>
            Cart
          </Text>
          <View
            style={{
              backgroundColor: Colors.primary,
              borderRadius: 100,
              height: getHeight(25),
              minWidth: getHeight(20),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: getHeight(35), color: Colors.white}}>
              {cartItems.length}
            </Text>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={index => index.toString()}
          data={cartItems}
          renderItem={({item}: any) => {
            console.log(item, 'ITEM======CART');
            return <CartItem product={item} />;
          }}
          ListFooterComponent={() => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(screens.orderSummery)}
                style={{
                  width: '90%',
                  height: getHeight(15),
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
                  Place Order
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        {/* <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: getHeight(10), height: getHeight(10)}}
            source={icons.cart_image}
          />
          <Text style={{textAlign: 'center', marginTop: 20}}>
            Your cart is empty!
          </Text>
        </View> */}
      </View>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    width: '95%',
    alignSelf: 'center',
  },
});
