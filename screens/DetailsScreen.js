import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation();

  const goBackToHome = () => {
    // Volver a HomeScreen
    navigation.goBack();
  };

  return (
    <View>
      <Text>Details Screen</Text>
      <Button title="Go back to Home" onPress={goBackToHome} />
    </View>
  );
};

export default DetailsScreen;
