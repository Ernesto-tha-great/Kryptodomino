import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const CryptoBasicCard = () => {
  return (
    <View style={tw`mt-6 mx-4`} >
      <Text style={tw`text-2xl font-medium`}>Learn Crypto Basics</Text>
      <TouchableOpacity activeOpacity={0.7} style={[tw`flex-row justify-between py-4 px-2 items-center rounded-xl`, {backgroundColor: '#F200AE'}]}>
          <View>
              <Text style={[tw`text-white text-lg`, {lineHeight: 20}]}>Click to download PDF(s) that {"\n"}teaches and helps you {"\n"}understand cryptocurrency</Text>
          </View>
          <View>
              <Image style={{width: 70, height: 80}} source={require('../assets/images/rocket.png')} />
          </View>
      </TouchableOpacity>
    </View>
  );
};

export default CryptoBasicCard;
