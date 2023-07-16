import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {getHeight} from '../../Theme/Constants';
import SvgIcon from '../../assets/SvgIcon';
import Colors from '../../Theme/Colors';
import SectionItem from '../SectionItem/SectionItem';
import Translation from '../../assets/i18n/Translation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import screens from '../../Navigation/screens';
interface SectionViewInterface {
  title: string;
  items: any[];
  viewAllPress: any;
}
const SectionView: FC<SectionViewInterface> = ({
  title = 'Best offers',
  items = [],
  viewAllPress,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  console.log(items, 'ITEMS========');
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleView}>
          <Text style={styles.title}>
            <Translation textKey={title} />
          </Text>
          <SvgIcon.AwesomeStar />
        </View>
        <TouchableOpacity
          onPress={() => {
            viewAllPress();
          }}
          style={styles.viewAll}>
          <Text style={styles.viewTxt}>{'View all >>'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: getHeight(45),
          marginBottom: getHeight(45),
        }}
        data={items}
        horizontal={true}
        renderItem={({item}: any) => {
          console.log(
            item?.node,
            'IMAGES====',
            item?.node?.priceRange?.minVariantPrice?.amount,
          );
          return (
            <SectionItem
              onPress={() =>
                navigation.navigate(screens.productDetails, {
                  product: item?.node,
                })
              }
              price={item?.node?.priceRange?.minVariantPrice?.amount}
              image={{uri: item?.node?.images?.edges[0]?.node?.url}}
              name={item?.node?.title}
            />
          );
        }}
      />
    </View>
  );
};

export default SectionView;

const styles = StyleSheet.create({
  container: {
    minHeight: getHeight(4),
    marginTop: getHeight(45),
  },
  title: {
    fontSize: getHeight(45),
    marginRight: getHeight(80),
    fontWeight: '600',
    color: Colors.black,
  },
  titleContainer: {
    minHeight: getHeight(20),
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  titleView: {
    // backgroundColor: 'green',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAll: {
    flex: 1,
    alignItems: 'flex-end',
  },
  viewTxt: {
    color: Colors.primary,
    fontSize: getHeight(55),
    fontWeight: '500',
  },
});
