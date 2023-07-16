/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {FC, useState} from 'react';
import {getHeight, getWidth} from '../../Theme/Constants';
import Colors from '../../Theme/Colors';
import images from '../../assets/Images';
import QuantityModal from '../../screens/Main/ProductDetails/QuantityModal';
import icons from '../../assets/icons';
import {useGetProductDetails, useGetProductImages} from '../../Api/hooks';

interface CartItemInterFace {
  product: any;
}
const CartItem: FC<CartItemInterFace> = ({product = {}}) => {
  const {productImages}: any = useGetProductImages(product?.id);
  const {productDetails}: any = useGetProductDetails(product?.handle);
  const [quantityModal, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(product?.isChecked);

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          maxHeight: '70%',
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          style={{
            height: getHeight(35),
            width: getHeight(35),
            borderWidth: !checked ? 1 : 0,
            marginRight: 10,
          }}>
          {checked ? (
            <Image
              source={icons.check_box}
              style={{height: '100%', width: '100%'}}
            />
          ) : null}
        </TouchableOpacity>
        {productImages ? (
          <Image
            resizeMode="stretch"
            style={{
              height: '90%',
              width: getWidth(4),
              backgroundColor: 'pink',
              marginRight: 10,
            }}
            source={{
              uri:
                productImages.length > 0
                  ? productImages[0]?.node?.image?.url
                  : null,
            }}
          />
        ) : null}
        <View>
          <Text
            style={{
              fontSize: getHeight(55),
              fontWeight: 'bold',
              maxWidth: getWidth(2),
              color: Colors.black,
              marginBottom: 10,
            }}
            numberOfLines={2}>
            {productDetails?.title}
          </Text>
          <Text
            style={{
              fontSize: getHeight(60),
              maxWidth: getWidth(2),
              marginBottom: 10,
              color: Colors.placeholderColor,
            }}
            numberOfLines={4}>
            {productDetails?.description}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: getHeight(55), color: Colors.primary}}>
              QAR {productDetails?.variants?.edges[0]?.node?.price?.amount}
            </Text>
            <TouchableOpacity
              onPress={() => setModalOpen(true)}
              style={styles.quantitySelector}>
              <Text
                style={{fontSize: getHeight(55), flex: 2, color: Colors.black}}>
                {' '}
                {quantity}
              </Text>
              <Image
                style={{height: '50%', width: '50%'}}
                source={images.arrowDown}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '30%',
          width: '95%',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderColor: Colors.borderGray,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{height: getHeight(30), width: getHeight(30)}}
            source={icons.buy_icon}
          />
          <Text style={{color: '#717171', fontSize: getHeight(50)}}>
            Buy this now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{height: getHeight(30), width: getHeight(30)}}
            source={icons.trash_icon}
          />
          <Text style={{color: '#717171', fontSize: getHeight(50)}}>
            Remove
          </Text>
        </TouchableOpacity>
      </View>
      <QuantityModal
        onSubmit={(value: any) => {
          setQuantity(value);
          setModalOpen(false);
        }}
        onClose={() => setModalOpen(false)}
        isOpen={quantityModal}
        value={quantity.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: getHeight(3.5),
    width: getWidth(1),
    alignSelf: 'center',
    padding: '5%',
    borderWidth: 0.5,
    borderColor: '#E2CEDD',
  },
  quantitySelector: {
    minWidth: getWidth(7),
    maxWidth: getWidth(2.5),
    left: getHeight(55),
    backgroundColor: '#FDF5FF',
    height: getHeight(30),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2CEDD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
    paddingRight: 4,
  },
});
export default CartItem;
