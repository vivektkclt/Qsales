/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Header} from '../../../components';
import Colors from '../../../Theme/Colors';
import {useGetProductDetails, useGetProductImages} from '../../../Api/hooks';
import {getHeight, getWidth} from '../../../Theme/Constants';
import PagerView from 'react-native-pager-view';
import CommonStyles from '../../../Theme/CommonStyles';
import images from '../../../assets/Images';
import QuantityModal from './QuantityModal';

const ProductDetails = ({route}: any) => {
  const tabRef = useRef<any>();
  const {product = {}}: {product: any} = route?.params ? route.params : {};
  const {productImages}: any = useGetProductImages(product?.id);
  const {productDetails}: any = useGetProductDetails(product?.handle);
  const [selectedIndex, setSelectedIndex] = useState<any>(0);
  const [quantityModal, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  // const features = [
  //   'Features fabric Comfortable',
  //   'Features fabric Comfortable handleSpacious',
  //   'Features fabric Comfortable handleSpacious',
  //   'Features fabric Comfortable handleSpacious',
  //   'Features fabric Comfortable handleSpacious',
  // ];
  useEffect(() => {
    console.log(
      productImages,
      'PRODUCT DETAILS===',
      product,
      '=======',
      productDetails,
    );
  }, [productImages, product, productDetails]);

  return (
    <View
      style={[CommonStyles.containerFlex1, {backgroundColor: Colors.white}]}>
      <View style={styles.container}>
        <Header title={product?.title} />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: getHeight(7)}}>
          <PagerView
            style={styles.imageContainer}
            onPageSelected={e => {
              console.log(e.nativeEvent.position);
              setSelectedIndex(e.nativeEvent.position);
            }}
            ref={tabRef}>
            {productImages
              .slice(
                0,
                productImages.length > 2
                  ? productImages.length - 2
                  : productImages.length,
              )
              .map((item: any) => {
                console.log(item, '=========IMAGE');
                if (item?.node?.mediaContentType === 'IMAGE') {
                  return (
                    <Image
                      key={item.toString()}
                      resizeMode="stretch"
                      style={CommonStyles.containerFlex1}
                      source={{
                        uri: item?.node?.image?.url,
                      }}
                    />
                  );
                }
              })}
          </PagerView>
          <View style={styles.dotContainer}>
            {productImages
              .slice(0, productImages.length - 2)
              .map((item: any, index: number) => {
                return (
                  <View
                    key={item.toString() + index.toString()}
                    style={[
                      styles.dotStyle,
                      {
                        backgroundColor:
                          index !== selectedIndex
                            ? Colors.placeholderColor
                            : Colors.black,
                      },
                    ]}
                  />
                );
              })}
          </View>
          <Text style={styles.titleTxt}>{product?.title}</Text>
          <Text style={styles.priceTxt}>
            {product?.priceRange?.minVariantPrice?.amount + ' '}
            {product?.priceRange?.minVariantPrice?.currencyCode}
          </Text>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityTxt}>Quantity</Text>
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
          <Text style={styles.subTitle}>Description</Text>
          <Image
            resizeMode="stretch"
            style={styles.imageContainer}
            source={{
              uri: productImages[productImages.length - 1]?.node?.image?.url,
            }}
          />
          <Text style={styles.titleTxt}>{productDetails?.description}</Text>
          {/* {features.map((item, index) => {
            return (
              <View
                key={item + index.toString()}
                style={styles.featureContainer}>
                <Image source={images.FeatureTick} style={styles.featureTick} />
                <Text style={styles.featureTxt}>{item}</Text>
              </View>
            );
          })} */}
        </ScrollView>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[styles.btnStyle, {backgroundColor: Colors.primary}]}>
            <Text style={styles.btnText}>Add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnStyle, {backgroundColor: Colors.green}]}>
            <Text style={styles.btnText}>
              Order by
              <Text style={{fontSize: getHeight(75)}}> whatsapp</Text>
            </Text>
          </TouchableOpacity>
        </View>
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

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    width: '95%',
    alignSelf: 'center',
  },
  imageContainer: {
    width: '100%',
    marginTop: getHeight(45),
    height: getHeight(2.41),
    backgroundColor: Colors.borderGray,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.borderGray,
  },
  dotContainer: {
    alignSelf: 'center',
    marginTop: getHeight(75),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dotStyle: {
    height: getHeight(95),
    width: getHeight(95),
    borderRadius: 100,
    marginRight: 20,
  },
  titleTxt: {
    width: '95%',
    alignSelf: 'center',
    fontSize: getHeight(50),
    marginTop: getHeight(50),
    color: Colors.black,
  },
  priceTxt: {
    width: '95%',
    alignSelf: 'center',
    marginTop: getHeight(80),
    fontSize: getHeight(50),
    color: Colors.primary,
  },
  quantityTxt: {
    fontSize: getHeight(50),
    color: Colors.primary,
  },
  quantityContainer: {
    width: '95%',
    alignSelf: 'center',
    marginTop: getHeight(80),
    flexDirection: 'row',
    alignItems: 'center',
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
  subTitle: {
    fontSize: getHeight(45),
    color: Colors.black,
    width: '95%',
    alignSelf: 'center',
    top: getHeight(55),
    fontWeight: '500',
  },
  btnStyle: {
    width: getWidth(2.2),
    height: '65%',
    backgroundColor: 'red',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    position: 'absolute',
    width: '100%',
    height: getHeight(12),
    bottom: 0,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnText: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: getHeight(50),
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getHeight(45),
  },
  featureTick: {
    height: getHeight(28),
    width: getHeight(28),
    marginRight: 7,
  },
  featureTxt: {
    flex: 5,
    fontSize: getHeight(55),
    color: Colors.black,
  },
});
