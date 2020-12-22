import React from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import styledText from '../styledComponents/styledText';
import styledView from '../styledComponents/styledView';
import {media} from '../assets/images';

const DetailsChallengeScreen = ({challengeExo, configChallenge, route}) => {
  const [state, setState] = useState(media);

  const challengeIndex = configChallenge.findIndex(
    (item) => item.idChallenge === route.params.idChallenge,
  );

  console.log(configChallenge);

  const challenge = configChallenge[challengeIndex][0].img;

  const articlesJsx = Object.values(configChallenge[challengeIndex]).map(
    (item, index) => (
      <Text key={index}>
        {/* {item.title === undefined ? '' : 'jours restant ' + item.title} */}
        {item.img}
      </Text>
    ),
  );

  return (
    <View style={styledView.view}>
      <Text style={styledText.text}>Challenge {challenge.name}</Text>
      <Text style={styledText.text}>Nombre de jours : {challenge.days}</Text>
      <Text style={styledText.text}>Premiere répétition {challenge.rep}</Text>
      <Text style={styledText.text}>Repetition en plus {challenge.reps}</Text>
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
