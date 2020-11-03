import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import styledText from '../styledComponents/styledText';
import styledView from '../styledComponents/styledView';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';
import styledButton from '../styledComponents/styledButton';
import {media} from '../assets/images/index';
import styledImage from '../styledComponents/styledImage';

const ChallengeScreen = () => {
  const [completed, setcompleted] = useState(false);
  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      style={styledBackgroundImage.image}>
      <ScrollView>
        <View style={styledView.view}>
          <Text style={styledText.title}>
            Sélectionner un ou plusieurs challenges
          </Text>
          {media.map((index) => (
            <TouchableOpacity
              key={index.id}
              activeOpacity={1}
              style={
                completed
                  ? styledButton.buttonChallenge
                  : styledButton.buttonChallengeCheck
              }
              onPress={() => {
                setcompleted((index.completed = !index.completed));
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
