/* eslint-disable react-hooks/exhaustive-deps */
import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import images from '../../../assets/Images';
import {getHeight} from '../../../Theme/Constants';
import screens from '../../../Navigation/screens';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import i18next from 'i18next';

const LogoSplash = ({navigation}: any) => {
  const {language} = useSelector((state: RootState) => state.AuthReducer);
  useEffect(() => {
    if (language) {
      handleLanguageChange(language);
    }
    setTimeout(() => {
      navigation.replace(screens.onBoarding);
    }, 1500);
  }, []);
  const handleLanguageChange = (language: string) => {
    i18next.changeLanguage(language);
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{
          height: getHeight(8),
          width: getHeight(8),
        }}
        source={images.splash_logo}
      />
    </View>
  );
};

export default LogoSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
