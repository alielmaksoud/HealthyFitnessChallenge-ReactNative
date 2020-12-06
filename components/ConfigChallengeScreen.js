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
import {toggleConfigChallenge} from '../store/actions';
const ConfigChallengeScreen = ({navigation, toggleConfigChallenge}) => {
  const [value, setValue] = useState({
    name: '',
    days: '',
    rep: '',
    reps: '',
    miniDays: 0,
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
            keyboardType={'numeric'}
          />
          <Text style={styledText.text}>Premiere repetition</Text>
          <TextInput
            style={styledButton.buttonConfig}
            onChangeText={(text) => setValue({...value, rep: text})}
            value={value.rep}
            keyboardType={'numeric'}
          />
          <Text style={styledText.text}>Repetition en + par jours</Text>
          <TextInput
            style={styledButton.buttonConfig}
            style={styledButton.buttonConfig}
            onChangeText={(text) => setValue({...value, reps: text})}
            value={value.reps}
            keyboardType={'numeric'}
          />

          <TouchableOpacity
            onPress={() => {
              // setValue({...value, miniDays: parseInt(value.days, 10) + 1});
              toggleConfigChallenge(value);
              navigation.navigate('MyChallengeScreen');
            }}>
            <View style={styledButton.buttonValidate}>
              <Text style={styledText.text}>Suivant</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styledView.view}>
          <View style={styledButton.buttonRecap}>
            <View style={styledView.view}>
              <Text style={styledText.text}>Challenge {value.name}</Text>
              <Text style={styledText.text}>Durée {value.days} JOURS</Text>
              <Text style={styledText.text}>
                Aujourd'hui {value.rep} répetitions
              </Text>
              <Text style={styledText.text}>
                +{value.reps} répetitions par jours
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
    configChallenge: state.toggleConfigChallenge.configChallenge,
  };
};

export default connect(mapStateToProps, {toggleConfigChallenge})(
  ConfigChallengeScreen,
);
