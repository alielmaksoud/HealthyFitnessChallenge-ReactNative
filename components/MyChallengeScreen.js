import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {min} from 'react-native-reanimated';
import {connect} from 'react-redux';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';
import styledButton from '../styledComponents/styledButton';
import styledText from '../styledComponents/styledText';
import styledView from '../styledComponents/styledView';

const MyChallengeScreen = ({configChallenge}) => {
  const [state, setstate] = useState(configChallenge);
  const [count, setCount] = useState(0);

  const minInteger = Object.values(state).map((item, index) => {
    let maxInteger = parseInt(item.days, 10);
    let minInteger = maxInteger - maxInteger;

    return minInteger;
  });

  console.log(minInteger);

  const articlesJsx = Object.values(state).map((item, index) => (
    <TouchableOpacity
      activeOpacity={1}
      style={styledView.viewTodo}
      onPress={() => setCount(count + 1)}
      key={index}>
      <Text style={styledText.textBlack}>{item.name}</Text>
      <Text style={styledText.textGray}>
        {minInteger[index]} {count} Jours
      </Text>
    </TouchableOpacity>
  ));

  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      style={styledBackgroundImage.image}>
      <ScrollView>
        <View style={styledView.view}>
          <Text style={styledText.title}>Mes challenges</Text>
          {articlesJsx}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    configChallenge: state.toggleConfigChallenge.configChallenge,
  };
};
export default connect(mapStateToProps)(MyChallengeScreen);
