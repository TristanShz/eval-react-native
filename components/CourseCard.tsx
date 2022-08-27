import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {STYLES} from '../utils/styles';
import {TCourse} from '../utils/data';
import Svg, {Path} from 'react-native-svg';
import {ARRAY_COLORS, COLORS} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';

const CourseCard = (props: {course: TCourse; index: number}) => {
  const cardColor =
    ARRAY_COLORS[Math.floor(Math.random() * ARRAY_COLORS.length)];
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Cours' as never, {course: props.course} as never)
      }
      style={[
        STYLES.rowContainer,
        {
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 32,
          backgroundColor: cardColor,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'black',
        },
      ]}>
      <View style={[STYLES.colContainer, {flex: 1, marginRight: 32}]}>
        <Text
          style={[
            STYLES.title,
            {
              marginBottom: 8,
              color: props.index % 2 === 0 ? COLORS.neutral.default : 'white',
            },
          ]}>
          {props.course.name}
        </Text>
        <Text
          style={{
            color: props.index % 2 === 0 ? COLORS.neutral.default : 'white',
          }}>
          {props.course.cardDescription}
        </Text>
      </View>
      <Svg width={20} height={39} fill="none">
        <Path
          d="M3.083 38.458a2.708 2.708 0 0 1-2.085-4.441L13.13 19.5 1.431 4.956a2.708 2.708 0 0 1 .407-3.819 2.708 2.708 0 0 1 3.954.407l13.08 16.25a2.708 2.708 0 0 1 0 3.44l-13.54 16.25a2.708 2.708 0 0 1-2.249.974Z"
          fill={props.index % 2 === 0 ? COLORS.neutral.default : '#ffffff'}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default CourseCard;
