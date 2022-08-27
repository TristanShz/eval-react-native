import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {STYLES} from '../utils/styles';
import {TCategory} from '../utils/data';
import {useNavigation} from '@react-navigation/native';

const Card = (category: TCategory) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(
          'Liste des cours' as never,
          {courses: category.courses} as never,
        )
      }
      style={[
        STYLES.colContainer,
        {
          width: 260,
          height: 175,
          backgroundColor: category.color,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'black',
          padding: 16,
          justifyContent: 'space-between',
          marginRight: 16,
        },
      ]}>
      <View style={[STYLES.colContainer]}>
        <Text style={[STYLES.text, STYLES.title, {marginBottom: 8}]}>
          {category.name}
        </Text>
        <Text style={STYLES.text}>{category.author}</Text>
      </View>
      <Text style={STYLES.text}>{category.courses.length} cours</Text>
      <View style={{position: 'absolute', bottom: 16, right: 16}}>
        <category.image />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
