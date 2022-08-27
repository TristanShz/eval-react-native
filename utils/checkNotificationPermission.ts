import notifee, {AuthorizationStatus} from '@notifee/react-native';

export const checkNotificationPermission = async () => {
  const settings = await notifee.getNotificationSettings();
  console.log('AUTORISATION :::', settings.authorizationStatus);
  return settings.authorizationStatus == AuthorizationStatus.AUTHORIZED;
};
