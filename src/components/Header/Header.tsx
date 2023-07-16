import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {getHeight, getWidth} from '../../Theme/Constants';
import CommonStyles from '../../Theme/CommonStyles';
import SvgIcon from '../../assets/SvgIcon';
import Colors from '../../Theme/Colors';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Translation from '../../assets/i18n/Translation';
interface HeaderInterface {
  title?: string;
}
const Header: FC<HeaderInterface> = ({title = ''}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[CommonStyles.containerFlex1, CommonStyles.centerContainer]}>
        <SvgIcon.BackArrow
          width={getWidth(12)}
          height={getWidth(12)}
          fill={Colors.black}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        {title ? (
          <>
            <Text numberOfLines={1} style={styles.title}>
              <Translation textKey={title} />
            </Text>
            <SvgIcon.AwesomeStar />
          </>
        ) : null}
      </View>
      <View style={[CommonStyles.containerFlex1, CommonStyles.centerContainer]}>
        <SvgIcon.SearchIcon height={getHeight(35)} />
      </View>
      <View style={[CommonStyles.containerFlex1, CommonStyles.centerContainer]}>
        <SvgIcon.CartIcon width={getHeight(28)} height={getHeight(28)} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: getHeight(25),
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
  },
  titleContainer: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: getHeight(45),
    fontWeight: '500',
    marginRight: getHeight(95),
    color: Colors.black,
    maxWidth: '70%',
  },
});
