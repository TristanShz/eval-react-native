import React from 'react';
import {Alert, Linking, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import notifee from '@notifee/react-native';
import {checkNotificationPermission} from '../utils/checkNotificationPermission';

const NotificationButton = () => {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    const notificationPermission = await checkNotificationPermission();

    if (!notificationPermission) {
      Alert.alert(
        'Veuillez autoriser les notifications',
        'Vous devez autoriser les notifications pour cette application afin de pouvoir vous envoyez une notification à vous-même',
        [
          {
            text: 'NON',
            style: 'cancel',
          },
          {text: 'OK', onPress: () => Linking.openSettings()},
        ],
      );
    }
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Bravo',
      body: 'Vous venez de vous envoyer une notification à vous-même',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <TouchableOpacity onPress={() => onDisplayNotification()}>
      <Svg width={20} height={23} fill="none">
        <Path
          d="m.42 15.88.255-.305c1.145-1.366 1.837-2.19 1.837-6.058 0-2.002.486-3.645 1.443-4.877.706-.91 1.66-1.6 2.917-2.111a.156.156 0 0 0 .042-.034C7.367 1 8.604 0 10 0s2.633 1 3.085 2.493a.162.162 0 0 0 .042.033c2.934 1.192 4.36 3.478 4.36 6.99 0 3.869.691 4.693 1.837 6.058l.255.304a1.783 1.783 0 0 1 .242 1.931c-.321.668-1.006 1.082-1.787 1.082H1.96c-.778 0-1.457-.413-1.78-1.078a1.784 1.784 0 0 1 .24-1.933ZM10 23a4.21 4.21 0 0 1-2.135-.583 4.135 4.135 0 0 1-1.53-1.58.203.203 0 0 1 .081-.275.21.21 0 0 1 .102-.026h6.962a.211.211 0 0 1 .18.099.204.204 0 0 1 .005.202 4.135 4.135 0 0 1-1.53 1.58A4.209 4.209 0 0 1 10 23Z"
          fill="#342C3A"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default NotificationButton;
