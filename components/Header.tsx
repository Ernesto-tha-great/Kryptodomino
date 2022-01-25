import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { AntDesign } from '@expo/vector-icons';

interface Props {
    navigation: {
        navigate: (routeName: string, params?: any  ) => void;
    }
    title: string;
}

const Header = ({navigation, title}: Props) => {
  return (
    <View style={tw`bg-blue-600 flex-row items-center px-3 py-3`}>
        <AntDesign onPress={() => navigation.navigate("Home")} name="arrowleft" size={38} color="white" />
      <Text style={tw`text-white text-2xl font-medium mx-20`}>{title}</Text>
    </View>
  );
};

export default Header;
