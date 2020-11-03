import React from 'react';
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
              style={styledButton.buttonHome}
              onPress={() => {}}>
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
