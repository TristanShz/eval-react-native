import React from 'react';
import {View} from 'react-native';
import Logo from '../assets/images/Logo';
import {STYLES} from '../utils/styles';
import NotificationButton from './NotificationButton';

const Header = () => {
  return (
    <View
      style={[
        STYLES.rowContainer,
        {
          marginVertical: 8,
          alignSelf: 'flex-start',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        },
      ]}>
      <Logo />
      <NotificationButton />
    </View>
  );
};

export default Header;
