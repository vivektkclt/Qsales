import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import images from '../../../assets/Images';
import PagerView from 'react-native-pager-view';
import {getHeight, getWidth} from '../../../Theme/Constants';
import Colors from '../../../Theme/Colors';
import screens from '../../../Navigation/screens';
const WelcomeScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#790B2C" />
      <PagerView
        onPageSelected={e => {
          setIndex(e.nativeEvent.position);
        }}
        style={styles.pagerView}
        initialPage={0}>
        <Image
          key={1}
          resizeMode="cover"
          style={styles.container}
          source={images.Welcome_1}
        />
        <Image
          key={2}
          resizeMode="cover"
          style={styles.container}
          source={images.Welcome_2}
        />
      </PagerView>
      <View style={styles.bottomContainer}>
        <View style={styles.tabIndex}>
          <View
            style={[
              styles.indexIcon,
              {
                backgroundColor: index === 0 ? Colors.white : Colors.black,
              },
            ]}
          />
          <View
            style={[
              styles.indexIcon,
              {
                backgroundColor: index === 1 ? Colors.white : Colors.black,
                marginLeft: getWidth(55),
              },
            ]}
          />
        </View>
        <View style={styles.skipContainer}>
          <TouchableOpacity
            onPress={() => navigation.replace(screens.main)}
            style={styles.skipBtn}>
            <Text style={styles.skipTxt}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: getHeight(1),
    width: '100%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: getHeight(15),
    width: '100%',
    alignSelf: 'center',
    height: getHeight(15),
  },
  tabIndex: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: getWidth(15),
  },
  indexIcon: {
    height: getHeight(90),
    width: getHeight(90),
    backgroundColor: 'white',
    borderRadius: 100,
  },
  skipContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  skipBtn: {
    width: getWidth(4),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipTxt: {
    fontSize: getHeight(50),
    color: 'white',
  },
});
