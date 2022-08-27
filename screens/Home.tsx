import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {COLORS} from '../utils/colors';
import Header from '../components/Header';
import {STYLES} from '../utils/styles';
import Chips from '../components/Chips';
import Section from '../components/Section';
import {DATA} from '../utils/data';
import {useNavigation} from '@react-navigation/native';
import Location from '../components/Location';
import Joke from '../components/Joke';

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        style={{
          ...STYLES.colContainer,
          backgroundColor: COLORS.background,
          padding: 16,
        }}>
        <Header />
        <View style={[STYLES.rowContainer, {marginVertical: 8}]}>
          {DATA.map(subject => {
            return (
              <Chips
                key={subject._id}
                onPress={() =>
                  navigation.navigate('Catégories' as never, {subject} as never)
                }>
                {subject.name}
              </Chips>
            );
          })}
        </View>
        {DATA.map(subject => {
          return <Section subject={subject} key={subject._id} />;
        })}
        <View style={{marginTop: 16}}>
          <Text style={[STYLES.text, STYLES.title]}>
            La partie inutile mais c'est pour la note :)
          </Text>
          <Location />
          <Joke />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
