/* eslint-disable react-hooks/exhaustive-deps */
import {Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../../../assets/Images';
import {getHeight, getWidth} from '../../../Theme/Constants';
import Colors from '../../../Theme/Colors';
import CategoryList from './CategoryList/CategoryList';
import {OfferView, SectionView} from '../../../components';
import strings from '../../../assets/i18n/strings';
import {
  useGetProducts,
  useGetCollections,
  useGetHomeBannerList,
} from '../../../Api/hooks';
import screens from '../../../Navigation/screens';
import Swiper from 'react-native-swiper';
const Home = ({navigation}: any) => {
  const {collections} = useGetCollections(10);
  const {products} = useGetProducts('best-sellers', 5);
  const {bannerImages} = useGetHomeBannerList();
  const newArrivals = useGetProducts('new-arrivals', 5);
  const newArrivalsProducts = newArrivals.products;
  const summerSales = useGetProducts('summer-essentials', 5);
  const summerProducts = summerSales.products;
  const underQar29 = useGetProducts('qr-1-qr-29-deals', 5);
  const underQar29Products = underQar29.products;
  const [categoryList, setCategoryList] = useState([]);
  const [bestList, setBestList] = useState<any>([]);
  const [newArrivalsList, setNewList] = useState<any>([]);
  const [summerList, setSummerList] = useState<any>([]);
  const [under29List, setUnder29List] = useState<any>([]);
  useEffect(() => {
    console.log(bannerImages, 'BANNER IMAGE HOME');
    if (collections) {
      // Process the collections data here
      setCategoryList(collections);
    }
    if (products) {
      console.log(products, 'COLLECTIONS======');
      setBestList(products);
    }
    if (newArrivalsProducts) {
      setNewList(newArrivalsProducts);
    }
    if (summerProducts) {
      setSummerList(summerProducts);
    }
    if (underQar29Products) {
      console.log(underQar29Products, 'UNDER Q29');
      setUnder29List(underQar29Products);
    }
  }, [
    collections,
    products,
    newArrivalsProducts,
    summerProducts,
    underQar29Products,
    setSummerList,
    bannerImages,
  ]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        minHeight: getHeight(1.5),
        backgroundColor: Colors.white,
      }}>
      <Swiper
        loop={true}
        autoplayTimeout={1000}
        style={styles.swiperContainer}
        showsPagination={true}
        dotColor={Colors.white}
        activeDotColor={Colors.black}>
        {bannerImages.map((item: any, index: number) => {
          return (
            <Image
              key={item + index.toString()}
              resizeMode="stretch"
              style={styles.swiperContainer}
              source={{uri: item}}
            />
          );
        })}
      </Swiper>

      <Image
        style={{
          height: getHeight(18),
          width: getWidth(1),
        }}
        resizeMode="stretch"
        // source={{
        //   uri: 'https://cdn.shopify.com/s/files/1/0689/6798/9537/files/gi_2160px.gif',
        // }}
        source={images.ExpressDel}
      />
      <CategoryList data={categoryList} />
      <SectionView
        viewAllPress={() =>
          navigation.navigate(screens.productList, {
            title: strings.bestOffers,
            category: 'best-sellers',
          })
        }
        items={bestList}
        title={strings.bestOffers}
      />
      <SectionView
        viewAllPress={() =>
          navigation.navigate(screens.productList, {
            title: strings.newArrivals,
            category: 'new-arrivals',
          })
        }
        items={newArrivalsList}
        title={strings.newArrivals}
      />
      <OfferView data={under29List} />
      <SectionView
        viewAllPress={() =>
          navigation.navigate(screens.productList, {
            title: strings.summerSales,
            category: 'summer-essentials',
          })
        }
        items={summerList}
        title={strings.summerSales}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  swiperContainer: {
    // width: '100%',
    height: getHeight(4.5),
    backgroundColor: Colors.placeholderColor,
  },
  swiperImage: {
    height: '100%',
    width: '100%',
  },
  dotContainer: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: getHeight(4.5),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dotStyle: {
    height: getHeight(95),
    width: getHeight(95),
    borderRadius: 100,
    marginRight: 20,
  },
});
export default Home;
