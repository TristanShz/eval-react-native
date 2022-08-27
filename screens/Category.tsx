import React from 'react';
import {ScrollView, View} from 'react-native';
import {TSubject} from '../utils/data';
import Card from '../components/Card';
import {STYLES} from '../utils/styles';

const Category = ({route}: any) => {
  const subject = route.params.subject as TSubject;

  return (
    <View
      style={[
        STYLES.colContainer,
        STYLES.background,
        {paddingTop: 64, paddingHorizontal: 16, height: '100%'},
      ]}>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={{marginTop: 24}}>
        {subject.categories.map(category => {
          return (
            <View style={{marginBottom: 16}} key={category._id}>
              <Card {...category} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;
