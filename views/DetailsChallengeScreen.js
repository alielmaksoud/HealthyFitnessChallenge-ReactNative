import React from 'react';
import {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styledText from '../styledComponents/styledText';
import styledView from '../styledComponents/styledView';
import {media} from '../assets/images';

const DetailsChallengeScreen = ({challengeExo, configChallenge, route}) => {
  const [state, setState] = useState(media);

  const challengeIndex = configChallenge.findIndex(
    (item) => item.idChallenge === route.params.idChallenge,
  );

  const challenge = configChallenge[challengeIndex];

  const articlesJsx = Object.values(configChallenge[challengeIndex]).map(
    (item, index) => (
      <>
        <Image key={index} source={item.img} />
      </>
    ),
  );
  console.log(configChallenge);

  return (
    <>
      <View style={styledView.viewDetails}>
        <Text style={styledText.text}>
          Jours {challenge.miniDays}/{challenge.days}
        </Text>
      </View>
      <View style={styledView.flexView}>
        <View style={styledView.viewDetails}>
          <Text style={styledText.text}>Edit </Text>
          <Text style={styledText.text}>Rappel </Text>
          <Text style={styledText.text}>Video</Text>
        </View>
      </View>
      <View style={styledView.view}>{articlesJsx}</View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    challengeExo: state.toggleChallenge.challengeExo,
    configChallenge: state.toggleConfigChallenge.configChallenge,
  };
};

export default connect(mapStateToProps)(DetailsChallengeScreen);
