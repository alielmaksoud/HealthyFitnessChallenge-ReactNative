import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styledButton from '../styledComponents/styledButton';
import styledText from '../styledComponents/styledText';

const ButtonHomeScreen = ({navigation}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        style={styledButton.buttonHome}
        onPress={() => navigation.navigate('Challenge')}>
        <Text style={styledText.text}>Challenge</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={styledButton.buttonHome}
        onPress={() => navigation.navigate('MyChallengeScreen')}>
        <Text style={styledText.text}>Mes challenges</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={styledButton.buttonHome}
        onPress={() => navigation.navigate('Challenge')}>
        <Text style={styledText.text}>Calcul IMC</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonHomeScreen;
