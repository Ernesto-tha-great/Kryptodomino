import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames'

const WelcomeCard = () => {
  return (
    <View style={tw`bg-blue-700 flex-row justify-between items-center px-2 `}>
      <View style={tw``}>
          <Text style={tw`text-white text-xl `}>Welcome to </Text>
          <Text style={tw`text-white text-2xl font-semibold`}>Krypdomino</Text>
          <Text style={tw`text-white`}>Playground for cryptocurrencies {"\n"}that provides solutions to the {"\n"}ecosystem.</Text>
      </View>
      <View>
          <Image style={{width: 140, height: 146}} source={require('../assets/images/virtual-currency.png')} />
      </View>
    </View>
  );
};

export default WelcomeCard;
