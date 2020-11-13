import React from 'react';
import {ImageBackground, Text} from 'react-native';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';

const ConfigChallengeScreen = (props) => {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      style={styledBackgroundImage.image}>
      <Text>Configurer votre challenge</Text>
    </ImageBackground>
  );
};

export default ConfigChallengeScreen;
