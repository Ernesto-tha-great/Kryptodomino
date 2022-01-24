import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface Props {
    item: any;
}

const MiniWatchListCard = ({item}: Props) => {
  return (
    <View style={tw`flex-row justify-between my-2 `}>
      <View style={tw`flex-row items-center`}>
        <Image source={item.img} style={tw`h-10 w-10 mr-2`} />
          <View>
            <Text style={tw`text-2xl `}>{item.name}</Text>
            <Text style={tw`text-sm text-gray-600`}>{item.code}</Text>
          </View>
      </View>
      <View style={tw`items-center`}>
        <Text style={tw`text-xl`}>${item.price}</Text>
        <Text style={[tw`text-xl`, {color: item.change > 0 ? "green" : "red"}]}>{item.change}%</Text>
      </View>
    </View>
  );
};

export default MiniWatchListCard;
