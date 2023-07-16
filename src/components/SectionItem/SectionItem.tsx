import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {getHeight, getWidth} from '../../Theme/Constants';
import Colors from '../../Theme/Colors';
interface ItemInterface {
  name: string;
  price: string;
  image: any;
  onPress?: any;
  marginLeft?: number;
}
const SectionItem: FC<ItemInterface> = ({
  name = '',
  price = '',
  image = '',
  onPress,
}) => {
  console.log(image, 'IMAGE=====');
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      style={{
        width: getWidth(2.2),
        marginLeft: getHeight(86),
        paddingBottom: getHeight(45),
      }}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode="cover" source={image} />
      </View>
      <Text numberOfLines={2} style={styles.nameText}>
        {name}
      </Text>
      <Text style={styles.priceText}>QAR {price}</Text>
    </TouchableOpacity>
  );
};

export default SectionItem;

const styles = StyleSheet.create({
  imageContainer: {
    height: getHeight(4),
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.lightPink,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  nameText: {
    fontSize: getHeight(65),
    marginTop: getHeight(85),
    fontWeight: '400',
    color: Colors.black,
  },
  priceText: {
    fontSize: getHeight(55),
    marginTop: getHeight(200),
    fontWeight: '400',
    color: Colors.primary,
  },
});
