import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';
import styledButton from '../styledComponents/styledButton';
import styledText from '../styledComponents/styledText';
import styledView from '../styledComponents/styledView';
import {connect} from 'react-redux';

const ConfigChallengeScreen = ({challengeExo}) => {
  const [challenge, setchallenge] = useState({
    name: 'chall',
    duree: 33,
    rep: 3,
    repenplus: 4,
  });

  const [value, onChangeText] = React.useState({name: ''});
  console.log(challengeExo);

  const handleChange = (value) => {
    onChangeText({...value, name: value});
  };

  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.jpg')}
      style={styledBackgroundImage.image}>
      <ScrollView>
        <View style={styledView.viewConfig}>
          <Text style={styledText.title}>Configurer votre challenge</Text>
          <Text style={styledText.text}>Nom de votre challenge</Text>
          <TextInput
            style={styledButton.buttonConfig}
            onChangeText={handleChange}
            value={value.name}
          />
          <Text style={styledText.text}>Durée du challenge</Text>
          <TextInput style={styledButton.buttonConfig} />
          <Text style={styledText.text}>Repetition du challenge</Text>
          <TextInput style={styledButton.buttonConfig} />
          <Text style={styledText.text}>Repetition en + par jours</Text>
          <TextInput style={styledButton.buttonConfig} />
        </View>
        <View style={styledView.view}>
          <View style={styledButton.buttonRecap}>
            <View style={styledView.view}>
              <Text style={styledText.text}>CHALLENGE {value.name} JOURS</Text>
              <Text style={styledText.text}>
                Aujourd'hui {challenge.rep} JOURS
              </Text>
              <Text style={styledText.text}>
                +{challenge.repenplus} par jours
              </Text>
            </View>
          </View>
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

export default connect(mapStateToProps)(ConfigChallengeScreen);
