import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface Props {
    item: any;
}

const TopMoverCard = ({item}: Props) => {
  return (
    <View style={tw` mx-2 mr-4 bg-white shadow-lg py-10 px-8 rounded-xl mt-2`}>
       <Image source={item.img} style={tw`h-10 w-10`} />
         <View style={tw`flex-row items-center`}>
            <Text style={tw`text-lg font-medium mr-3`}>{item.code}</Text>
            <Text style={tw`text-lg`}>${item.price}</Text>
          </View>
       <Text style={tw`text-2xl text-green-600 font-medium`}>+{item.change}%</Text>
    </View>
  );
};

export default TopMoverCard;
