import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {STYLES} from '../utils/styles';
import Card from './Card';
import {TSubject} from '../utils/data';
import {useNavigation} from '@react-navigation/native';

type Props = {
  subject: TSubject;
};

const Section = (props: Props) => {
  const navigation = useNavigation();

  return (
    <View style={[STYLES.colContainer, {marginVertical: 8}]}>
      <View
        style={[
          STYLES.rowContainer,
          {justifyContent: 'space-between', marginBottom: 16},
        ]}>
        <Text style={[STYLES.text, STYLES.title]}>{props.subject.name}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              'Catégories' as never,
              {subject: props.subject} as never,
            )
          }>
          <Text style={[STYLES.text, STYLES.lightText]}>Voir tous</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{overflow: 'visible'}}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled>
        {props.subject.categories.map(category => {
          return <Card {...category} key={category._id} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Section;
