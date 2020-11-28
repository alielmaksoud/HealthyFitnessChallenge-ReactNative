import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';
import styledButton from '../styledComponents/styledButton';
import styledText from '../styledComponents/styledText';
import styledView from '../styledComponents/styledView';

const MyChallengeScreen = ({configChallenge}) => {
  const [state, setstate] = useState(configChallenge);
  console.log(Object.values(state));

  const articlesJsx = Object.values(state).map((item, index) => (
    <View style={styledView.viewTodo} key={index}>
      <Text style={styledText.textBlack}>{item.name}</Text>
      <Text style={styledText.textGray}>{item.days} Jours</Text>
    </View>
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
