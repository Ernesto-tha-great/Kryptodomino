import React from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { DummyData2 } from '../constants/DummyData';
import TopMoverCard from './TopMoverCard';

const TopMovers = () => {
  return (
    <View style={tw`mt-4 mx-4`}>
    <Text style={tw`text-2xl font-medium`}>Top Movers</Text>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={tw`flex-1 mb-2 pb-4 `}>
    {DummyData2.map((item, index) => (
        <TopMoverCard key={index * item.id} item={item} />
    ))}
    </ScrollView>
    </View>
  );
};

export default TopMovers;
