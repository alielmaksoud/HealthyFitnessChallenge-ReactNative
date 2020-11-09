import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styledText from '../styledComponents/styledText';
import styledView from '../styledComponents/styledView';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';
import styledButton from '../styledComponents/styledButton';
import styledImage from '../styledComponents/styledImage';
import {media} from '../assets/images';

const ChallengeScreen = () => {
  const [state, setstate] = useState(media);
  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      style={styledBackgroundImage.image}>
      <ScrollView>
        <View style={styledView.view}>
          <Text style={styledText.title}>
            Sélectionner un ou plusieurs exercices
          </Text>

          {state.todos.map((index) => {
            <Text style={styledText.text}>{index.title}</Text>;
          })}
          {state.todos.map((index) => (
            <TouchableOpacity
              key={index.id}
              activeOpacity={1}
              style={
                index.completed
                  ? styledButton.buttonChallenge
                  : styledButton.buttonChallengeCheck
              }
              onPress={() => {
                const elementsIndex = state.todos.findIndex(
                  (element) => element.id == index.id,
                );
                let newArray = [...state.todos];
                newArray[elementsIndex] = {
                  ...newArray[elementsIndex],
                  completed: !newArray[elementsIndex].completed,
                };
                setstate({
                  todos: newArray,
                });
                console.log(state);
              }}>
              <Image style={styledImage.imageChallenge} source={index.img} />
              <Text style={styledText.text}>{index.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ChallengeScreen;
