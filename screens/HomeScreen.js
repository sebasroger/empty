import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToDetails = () => {
    // Navegar a DetailsScreen
    navigation.navigate('Details');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={goToDetails} />
    </View>
  );
};

export default HomeScreen;
