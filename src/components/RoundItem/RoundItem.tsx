import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {getHeight, getWidth} from '../../Theme/Constants';
import Colors from '../../Theme/Colors';
interface RoundItemInterface {
  label: string;
  icon: any;
  onPress: any;
}
const RoundItem: FC<RoundItemInterface> = ({
  label = '',
  icon = '',
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.mainContainer}>
      <View style={styles.container}>
        <Image resizeMode="contain" style={styles.icon} source={icon} />
      </View>
      <Text style={styles.labelTxt}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RoundItem;

const styles = StyleSheet.create({
  mainContainer: {width: getWidth(4), alignItems: 'center'},
  container: {
    borderWidth: 1,
    borderColor: '#E2CEDD',
    borderRadius: 100,
    marginLeft: 10,
    height: getHeight(12),
    backgroundColor: '#FDF5FF',
    width: getHeight(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: '60%',
    width: '70%',
  },
  labelTxt: {textAlign: 'center', color: Colors.primary, fontWeight: '600'},
});
