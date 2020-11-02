import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Healthy Fitness Challenge</Text>
      <Button
        title="Challenge"
        onPress={() => navigation.navigate('Challenge')}
      />
      <Button
        title="Mes challenges"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Calcul IMC"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
