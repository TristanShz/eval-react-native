import {PermissionsAndroid} from 'react-native';

export const requestLocationPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'L-earn a besoin de votre permission',
      message:
        'Veuillez autoriser les notifications' +
        'afin que je puisse recevoir une bonne note :)',
      buttonNeutral: 'JE SAIS PAS',
      buttonNegative: 'NON',
      buttonPositive: 'OK',
    },
  );
  return granted;
};
