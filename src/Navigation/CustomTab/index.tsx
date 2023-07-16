import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {getHeight} from '../../Theme/Constants';
import Colors from '../../Theme/Colors';
import SvgIcon from '../../assets/SvgIcon';
import screens from '../screens';
import strings from '../../assets/i18n/strings';
import Translation from '../../assets/i18n/Translation';

const CustomTab = ({navigation}: any) => {
  const [selected, setSelected] = useState(0);
  const menus = [
    {
      id: 1,
      label: strings.home,
      screen: screens.home,
      icon: SvgIcon.HomeIcon,
    },
    {
      id: 2,
      screen: screens.explore,
      label: strings.explore,
      icon: SvgIcon.ExploreIcon,
    },
    {
      id: 3,
      screen: screens.cart,
      label: strings.cart,
      icon: SvgIcon.CartIcon,
    },
    {
      id: 4,
      screen: screens.account,
      label: strings.account,
      icon: SvgIcon.AccountIcon,
    },
  ];
  return (
    <View style={styles.container}>
      {menus.map((item: any, index: number) => {
        let Icon = item?.icon;
        return (
          <TouchableOpacity
            onPress={() => {
              setSelected(index);
              if (item.screen) {
                navigation.navigate(item.screen);
              }
            }}
            key={item.id}
            style={styles.bottomIconContainer}>
            {item.icon ? (
              <Icon
                fill={index === selected ? Colors.primary : Colors.iconGray}
                height={getHeight(28)}
                width={getHeight(28)}
              />
            ) : null}
            <Text
              style={[
                styles.menuTxt,
                {color: index === selected ? Colors.primary : Colors.black},
              ]}>
              <Translation textKey={item.label} />
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: getHeight(15),
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
    backgroundColor: Colors.white,
  },
  bottomIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTxt: {
    fontSize: getHeight(65),
  },
});
export default CustomTab;
