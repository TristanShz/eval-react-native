import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {STYLES} from '../utils/styles';
import {TCourse} from '../utils/data';

const Course = ({route}: any) => {
  const course = route.params.course as TCourse;

  return (
    <View
      style={[
        STYLES.colContainer,
        STYLES.background,
        {paddingTop: 64, paddingHorizontal: 16, height: '100%'},
      ]}>
      <ScrollView style={[STYLES.colContainer]}>
        <Text style={STYLES.text}>{course.content}</Text>
      </ScrollView>
    </View>
  );
};

export default Course;
