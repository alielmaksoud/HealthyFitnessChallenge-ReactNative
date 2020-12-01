import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styledButton from '../styledComponents/styledButton';
import styledText from '../styledComponents/styledText';
import ButtonHome from './ButtonHome';

const ButtonHomeScreen = ({navigation}) => {
  return (
    <>
      <ButtonHome
        style={styledButton.buttonHome}
        styleText={styledText.text}
        navigation={navigation}
        textNav={'Challenge'}
        name={'Challenge'}
      />
      <ButtonHome
        style={styledButton.buttonHome}
        styleText={styledText.text}
        navigation={navigation}
        textNav={'MyChallengeScreen'}
        name={'Mes challenges'}
      />
      <ButtonHome
        style={styledButton.buttonHome}
        styleText={styledText.text}
        navigation={navigation}
        textNav={'MyChallengeScreen'}
        name={'Calcul IMC'}
      />
    </>
  );
};

export default ButtonHomeScreen;
