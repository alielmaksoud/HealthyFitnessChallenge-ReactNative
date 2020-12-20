import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';
import styledText from '../styledComponents/styledText';
import styledView from '../styledComponents/styledView';

const MyChallengeScreen = ({configChallenge, navigation}) => {
  const [state, setState] = useState(configChallenge);

  const _displayDetailForFilm = (idChallenge) => {
    navigation.navigate('DetailsChallengeScreen', {idChallenge: idChallenge});
  };

  const articlesJsx = Object.values(state).map((item, index) => (
    <TouchableOpacity
      activeOpacity={1}
      style={styledView.viewTodo}
      onPress={() => _displayDetailForFilm(item.idChallenge)}
      key={index}>
      <Text style={styledText.textBlack}>
        {item.name} {item.id}
      </Text>
      <Text style={styledText.textGray}>
        Jours restant {configChallenge[index].days}
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
