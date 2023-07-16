import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {getHeight} from '../../Theme/Constants';
import images from '../../assets/Images';
import SvgIcon from '../../assets/SvgIcon';
import Colors from '../../Theme/Colors';
import LanguageModel from '../LanguageModel/LanguageModel';

const HomeHeader = () => {
  const [languageVisible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Image
          resizeMode="contain"
          style={styles.headerIcon}
          source={images.HeaderIcon}
        />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <SvgIcon.SearchIcon height={getHeight(35)} />
          <TextInput style={{flex: 1, height: '100%', paddingLeft: 10}} />
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={styles.languageBtn}>
          <Text style={{color: Colors.black}}>E/A</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.notificationContainer}>
        <SvgIcon.NotificationIcon width={getHeight(25)} height={getHeight(5)} />
      </View>
      <LanguageModel
        onClose={() => setVisible(false)}
        visible={languageVisible}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    height: getHeight(18),
    backgroundColor: Colors.white,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
  },
  headerIcon: {width: '100%', height: '100%'},
  notificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageBtn: {
    width: '80%',
    height: '75%',
    backgroundColor: 'rgba(226, 206, 221, 0.3)',
    borderWidth: 1,
    borderColor: '#e2cedd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    width: '90%',
    backgroundColor: Colors.borderGray,
    borderRadius: 10,
    height: '90%',
    flexDirection: 'row',
    paddingLeft: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
