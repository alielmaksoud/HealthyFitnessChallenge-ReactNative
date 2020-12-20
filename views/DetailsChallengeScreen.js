import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const DetailsChallengeScreen = ({challengeExo, configChallenge, route}) => {
  const challengeIndex = configChallenge.findIndex(
    (item) => item.idChallenge === route.params.idChallenge,
  );

  const challenge = configChallenge[challengeIndex];

  const articlesJsx = Object.values(
    configChallenge[challengeIndex],
  ).map((item, index) => (
    <Text>{item.title === undefined ? '' : 'jours restant ' + item.title}</Text>
  ));

  return (
    <View>
      <Text>{challenge.name}</Text>
      <Text>{challenge.days}</Text>
      <Text>{challenge.title}</Text>
      {articlesJsx}
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
