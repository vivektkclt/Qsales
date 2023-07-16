import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getHeight} from '../../Theme/Constants';
import OfferItem from '../OfferItem/OfferItem';

const OfferView = ({data}: any) => {
  console.log(data, 'DATA==========');
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        renderItem={({item}: any) => {
          return (
            <OfferItem
              // star={item.star}
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

export default OfferView;

const styles = StyleSheet.create({
  container: {
    height: getHeight(12),
  },
});
