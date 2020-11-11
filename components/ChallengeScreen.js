import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styledText from '../styledComponents/styledText';
import styledView from '../styledComponents/styledView';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';
import styledButton from '../styledComponents/styledButton';
import styledImage from '../styledComponents/styledImage';
import {media} from '../assets/images';
import {connect} from 'react-redux';

const ChallengeScreen = ({dispatch, challengeExo}) => {
  const [state, setState] = useState(media);

  console.log(challengeExo);

  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      style={styledBackgroundImage.image}>
      <ScrollView>
        <View style={styledView.view}>
          <Text style={styledText.title}>
            Sélectionner un ou plusieurs exercices
          </Text>

          {state.data.map((index) => {
            <Text style={styledText.text}>{index.title}</Text>;
          })}
          {state.data.map((index) => (
            <TouchableOpacity
              key={index.id}
              activeOpacity={1}
              style={
                state
                  ? styledButton.buttonChallenge
                  : styledButton.buttonChallengeCheck
              }
              onPress={() => {
                const elementsIndex = state.data.findIndex(
                  (element) => element.id == index.id,
                );

                dispatch({
                  type: 'TOGGLE_EXERCISES',
                  value: state.data[elementsIndex],
                });
              }}>
              <Image style={styledImage.imageChallenge} source={index.img} />
              <Text style={styledText.text}>{index.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    challengeExo: state.challengeExo,
  };
};

export default connect(mapStateToProps)(ChallengeScreen);
