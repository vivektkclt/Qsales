import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getHeight} from '../../../../Theme/Constants';
import images from '../../../../assets/Images';
import {BannerStrip, RoundItem} from '../../../../components';
import Colors from '../../../../Theme/Colors';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import screens from '../../../../Navigation/screens';
import Translation from '../../../../assets/i18n/Translation';
import strings from '../../../../assets/i18n/strings';

const CategoryList = ({data}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [categoryList, setList] = useState<any>([]);

  useEffect(() => {
    let all = [
      {
        id: 6,
        name: 'View all\n categories',
        icon: images.AllCategories,
      },
    ];
    let listData = [...data, ...all];
    setList(listData);
  }, [data]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Translation textKey={strings.categories} />
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categoryList}
        renderItem={({item, index}: any) => {
          console.log(item, 'Item======');
          return (
            <RoundItem
              onPress={() => {
                if (item.id !== 6) {
                  navigation.navigate(screens.productList, {
                    title: item?.node?.title,
                    category: item?.node?.handle,
                  });
                } else {
                  navigation.navigate(screens.explore);
                }
              }}
              label={
                index === categoryList.length - 1
                  ? item?.name
                  : item?.node?.title
              }
              icon={
                index === categoryList.length - 1
                  ? item?.icon
                  : {uri: item?.node?.image?.originalSrc}
              }
            />
          );
        }}
      />
      <BannerStrip />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    minHeight: getHeight(8),
  },
  title: {
    fontWeight: '600',
    fontSize: getHeight(52),
    marginTop: getHeight(70),
    width: '90%',
    alignSelf: 'center',
    marginBottom: getHeight(55),
    color: Colors.black,
  },
  bannerContainer: {
    height: getHeight(15),
    marginTop: getHeight(55),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.lightPink,
    flexDirection: 'row',
    paddingRight: 10,
  },
  bannerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  bannerMainTxt: {
    fontSize: getHeight(75),
    marginLeft: getHeight(96),
    fontWeight: '600',
    color: Colors.black,
  },
  bannerSubTxt: {
    fontWeight: '400',
  },
});
