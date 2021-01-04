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
import {toggleExercises} from '../store/actions';

const ChallengeScreen = ({challengeExo, navigation, toggleExercises}) => {
  const [state, setState] = useState(media);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  console.log(challengeExo);
  const length = Object.values(challengeExo).length;

  const handleStyle = (index) => {
    const elementsIndex = state.data.findIndex(
      (element) => element.id == index.id,
    );
    return !state.data[elementsIndex].completed
      ? styledButton.buttonChallenge
      : styledButton.buttonChallengeCheck;
  };

  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      style={styledBackgroundImage.image}>
      <ScrollView>
        <View style={styledView.view}>
          <Text style={styledText.title}>
            Sélectionner un ou plusieurs exercices
          </Text>
          {length > 0 ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('ConfigChallengeScreen')}>
              <View style={styledButton.buttonValidate}>
                <Text style={styledText.text}>Suivant</Text>
              </View>
            </TouchableOpacity>
          ) : null}
          {state.data.map((index) => {
            <Text key={index} style={styledText.text}>
              {index.title}
            </Text>;
          })}
          {state.data.map((index) => (
            <TouchableOpacity
              key={index.id}
              activeOpacity={1}
              style={handleStyle(index)}
              onPress={() => {
                const elementsIndex = state.data.findIndex(
                  (element) => element.id == index.id,
                );
                let newArray = [...state.data];
                newArray[elementsIndex] = {
                  ...newArray[elementsIndex],
                  completed: !newArray[elementsIndex].completed,
                };
                setState({data: newArray});
                toggleExercises(state.data[elementsIndex]);
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
    challengeExo: state.toggleChallenge.challengeExo,
  };
};

export default connect(mapStateToProps, {toggleExercises})(ChallengeScreen);
