import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const DetailsChallengeScreen = ({challengeExo, configChallenge}) => {
  console.log(challengeExo);
  console.log(configChallenge);

  return (
    <View>
      <Text>ffff</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    challengeExo: state.toggleChallenge.challengeExo,
    configChallenge: state.toggleConfigChallenge.configChallenge,
  };
};

export default connect(mapStateToProps)(DetailsChallengeScreen);
