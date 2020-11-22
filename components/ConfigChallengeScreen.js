import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import styledBackgroundImage from '../styledComponents/styledBackgroundImage';
import styledButton from '../styledComponents/styledButton';
import styledText from '../styledComponents/styledText';
import styledView from '../styledComponents/styledView';
import {connect} from 'react-redux';

const ConfigChallengeScreen = ({dispatch, configChallenge, challengeExo}) => {
  const [value, setValue] = useState({
    name: '',
    days: '',
    rep: '',
    reps: '',
  });
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
            onChangeText={(text) => setValue({...value, name: text})}
            value={value.name}
          />
          <Text style={styledText.text}>Durée du challenge</Text>
          <TextInput
            style={styledButton.buttonConfig}
            onChangeText={(text) => setValue({...value, days: text})}
            value={value.days}
          />
          <Text style={styledText.text}>Premiere repetition</Text>
          <TextInput
            style={styledButton.buttonConfig}
            onChangeText={(text) => setValue({...value, rep: text})}
            value={value.rep}
          />
          <Text style={styledText.text}>Repetition en + par jours</Text>
          <TextInput
            style={styledButton.buttonConfig}
            style={styledButton.buttonConfig}
            onChangeText={(text) => setValue({...value, reps: text})}
            value={value.reps}
          />

          <TouchableOpacity
            onPress={() => {
              const action = {type: 'TOGGLE_CONFIG_CHALLENGE', value: value};
              dispatch(action);
              console.log(value);
            }}>
            <View style={styledButton.buttonValidate}>
              <Text style={styledText.text}>Suivant</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styledView.view}>
          <View style={styledButton.buttonRecap}>
            <View style={styledView.view}>
              <Text style={styledText.text}>CHALLENGE {value.days} JOURS</Text>
              <Text style={styledText.text}>
                Aujourd'hui {value.rep} repetitions
              </Text>
              <Text style={styledText.text}>
                +{value.reps} repetitions par jours
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
    configChallenge: state.configChallenge,
  };
};

export default connect(mapStateToProps)(ConfigChallengeScreen);
