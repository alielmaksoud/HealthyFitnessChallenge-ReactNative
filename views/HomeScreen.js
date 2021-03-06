import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import styledView from '../styledComponents/styledView';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';
import ButtonHome from '../components/ButtonHome';
import styledText from '../styledComponents/styledText';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      style={styledBackgroundImage.image}>
      <View style={styledView.view}>
        <Text style={styledText.title}>Healthy Fitness Challenge</Text>
        <ButtonHome navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
