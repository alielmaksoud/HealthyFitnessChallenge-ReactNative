import React from 'react';
import {ImageBackground, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';
import styledText from '../styledComponents/styledText';

const ConfigChallengeScreen = (props) => {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      style={styledBackgroundImage.image}>
      <Text style={styledText.title}>Configurer votre challenge</Text>
      <TextInput defaultValue="You can type in me"></TextInput>
    </ImageBackground>
  );
};

export default ConfigChallengeScreen;
