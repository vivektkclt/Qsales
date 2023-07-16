import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BannerStrip, Header, SectionItem} from '../../../components';
import {useGetProducts} from '../../../Api/hooks';
import {getHeight, getWidth} from '../../../Theme/Constants';
import Colors from '../../../Theme/Colors';
import CommonStyles from '../../../Theme/CommonStyles';
import SvgIcon from '../../../assets/SvgIcon';
import Translation from '../../../assets/i18n/Translation';
import strings from '../../../assets/i18n/strings';
import screens from '../../../Navigation/screens';

const ProductList = ({route, navigation}: any) => {
  const {title = '', category = ''} = route?.params || {};
  const {products} = useGetProducts(category, 200);
  const [productsData, setProducts] = useState<any>([]);
  useEffect(() => {
    console.log(products, 'LIST======');
    if (products && products.length > 0) {
      setProducts(products);
    }
  }, [products]);
  return (
    <View style={{backgroundColor: Colors.white}}>
      <Header title={title} />
      <BannerStrip />
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={productsData}
        numColumns={2}
        renderItem={({item}: any) => {
          console.log(
            item?.node,
            'IMAGES====',
            item?.node?.priceRange?.minVariantPrice?.amount,
          );
          return (
            <SectionItem
              onPress={() => {
                navigation.navigate(screens.productDetails, {
                  product: item?.node,
                });
              }}
              marginLeft={25}
              price={item?.node?.priceRange?.minVariantPrice?.amount}
              image={{uri: item?.node?.images?.edges[0]?.node?.url}}
              name={item?.node?.title}
            />
          );
        }}
      />
      <View style={styles.sortFilterContainer}>
        <TouchableOpacity
          style={[
            CommonStyles.containerFlex1,
            CommonStyles.contentCenter,
            CommonStyles.flexRowContainer,
            styles.borderLine,
          ]}>
          <SvgIcon.FilterIcon />
          <Text style={styles.textFilter}>
            <Translation textKey={strings.filter} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            CommonStyles.containerFlex1,
            CommonStyles.contentCenter,
            CommonStyles.flexRowContainer,
          ]}>
          <SvgIcon.SortIcon width={getHeight(30)} height={getHeight(30)} />
          <Text style={styles.textFilter}>
            <Translation textKey={strings.sort} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sortFilterContainer: {
    position: 'absolute',
    bottom: 115,
    minHeight: getHeight(16),
    backgroundColor: Colors.primary,
    width: getWidth(1.5),
    alignSelf: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textFilter: {
    color: Colors.white,
    fontWeight: '500',
    marginLeft: 10,
    fontSize: getHeight(55),
  },
  borderLine: {
    borderRightWidth: 1,
    height: '60%',
    borderRightColor: Colors.white,
  },
  listContainer: {
    minHeight: getHeight(1),
    marginTop: getHeight(45),
    paddingRight: getHeight(45),
    paddingBottom: getHeight(5),
    // alignSelf: 'center',
  },
});
export default ProductList;
