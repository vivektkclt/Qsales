import React, {useEffect, useState} from 'react';
import {CategoryItem, Header} from '../../../components';
import {FlatList, StyleSheet, View} from 'react-native';
import Colors from '../../../Theme/Colors';
import strings from '../../../assets/i18n/strings';
import {useGetCollections} from '../../../Api/hooks';
import {getHeight} from '../../../Theme/Constants';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import screens from '../../../Navigation/screens';

const Explore = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {collections} = useGetCollections(100);
  const [categoryList, setCategoryList] = useState<any>([]);
  useEffect(() => {
    if (collections && collections.length > 0) {
      setCategoryList(collections);
    }
  }, [collections]);
  return (
    <>
      <View style={{backgroundColor: Colors.white}}>
        <Header title={strings.categories} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          data={categoryList}
          numColumns={3}
          renderItem={({item}: any) => {
            return (
              <CategoryItem
                onPress={() =>
                  navigation.navigate(screens.productList, {
                    title: item?.node?.title,
                    category: item?.node?.handle,
                  })
                }
                image={item?.node?.image?.originalSrc}
                name={item?.node?.title}
              />
            );
          }}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    minHeight: getHeight(1),
    marginTop: getHeight(45),
    paddingRight: getHeight(45),
    paddingBottom: getHeight(5),
    alignSelf: 'center',
  },
});
export default Explore;
