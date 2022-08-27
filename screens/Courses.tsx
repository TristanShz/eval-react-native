import React from 'react';
import {ScrollView, View} from 'react-native';
import {STYLES} from '../utils/styles';
import {TCourse} from '../utils/data';
import CourseCard from '../components/CourseCard';

const Courses = ({route}: any) => {
  const courses = route.params.courses as TCourse[];

  return (
    <View
      style={[
        STYLES.colContainer,
        STYLES.background,
        {paddingTop: 64, paddingHorizontal: 16, height: '100%'},
      ]}>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={[STYLES.colContainer, STYLES.background]}>
        {courses.map((course, index) => {
          return <CourseCard course={course} index={index} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Courses;
