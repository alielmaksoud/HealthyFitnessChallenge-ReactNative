import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styledText from '../styledComponents/styledText';
import styledView from '../styledComponents/styledView';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';
import styledButton from '../styledComponents/styledButton';
import {media, mediaByIndex} from '../assets/svg';
import {SvgUri} from 'react-native-svg';

const ChallengeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      style={styledBackgroundImage.image}>
      <View style={styledView.view}>
        <Text style={styledText.title}>
          Sélectionner un ou plusieurs challenges
        </Text>
        {media.map((index) => (
          <TouchableOpacity
            activeOpacity={1}
            style={styledButton.buttonHome}
            onPress={() => navigation.navigate()}>
            <Text style={styledText.text}>Bridge</Text>
            <SvgUri width={120} height={40} uri={mediaByIndex(index)} />
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

export default ChallengeScreen;
