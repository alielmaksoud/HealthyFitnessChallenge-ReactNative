import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styledButton from '../styledComponents/styledButton';
import styledText from '../styledComponents/styledText';
import ButtonHome from './ButtonHome';
import {deleteExercises} from '../store/actions';

const ButtonHomeScreen = ({navigation, deleteExercises}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      deleteExercises();
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
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

const mapStateToProps = (state) => {
  return {
    challengeExo: state.toggleChallenge.challengeExo,
  };
};

export default connect(mapStateToProps, {deleteExercises})(ButtonHomeScreen);
