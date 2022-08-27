import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {STYLES} from '../utils/styles';
import {COLORS} from '../utils/colors';

const Joke = () => {
  const [joke, setJoke] = useState<
    {setup: string; delivery: string} | undefined
  >(undefined);
  const [showAnswer, setShowAnswer] = useState(false);

  const fetchJoke = async (): Promise<{setup: string; delivery: string}> => {
    return fetch('https://v2.jokeapi.dev/joke/Any?lang=fr').then(json =>
      json.json(),
    );
  };
  useEffect(() => {
    fetchJoke().then(res =>
      setJoke({setup: res.setup, delivery: res.delivery}),
    );
  }, []);

  return (
    <View
      style={[
        STYLES.colContainer,
        STYLES.container,
        {
          backgroundColor: COLORS.pink,
          marginVertical: 16,
        },
      ]}>
      <Text style={[STYLES.text, STYLES.title]}>Blague aléatoire</Text>
      <Text style={[STYLES.text, {marginTop: 8}]}>{joke?.setup}</Text>
      <TouchableOpacity
        onPress={() => setShowAnswer(true)}
        style={[
          STYLES.button,
          {
            backgroundColor: COLORS.green,
          },
        ]}>
        <Text style={STYLES.text}>Voir la réponse</Text>
      </TouchableOpacity>
      {showAnswer && (
        <>
          <Text style={[STYLES.text, {marginTop: 8}]}>{joke?.delivery}</Text>
          <TouchableOpacity
            onPress={() => {
              fetchJoke().then(res => {
                setShowAnswer(false);
                setJoke({setup: res.setup, delivery: res.delivery});
              });
            }}
            style={[
              STYLES.button,
              {
                backgroundColor: COLORS.secondary.default,
              },
            ]}>
            <Text style={STYLES.text}>Générer une autre blague</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Joke;
