import React, {useState} from 'react';
import { View, Text, TouchableOpacity, FlatList,ScrollView} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import MiniWatchListCard from './MiniWatchListCard';
import { DummyData1 } from '../constants/DummyData';

interface Props {
  favourites? : boolean;
}

const WatchList = ({favourites}: Props) => {
    const [emptyState, setEmptyState] = useState(false);
  return (
      <>
      {emptyState ? (
    <View style={tw`mt-4 mx-4`}>
      <Text style={tw`text-2xl font-medium`}>Watchlist</Text>
      <View style={tw`items-center bg-white shadow-lg rounded-xl py-3 mt-2`}>
      <View>
          <Text style={tw`text-xl`}>Your favourited asset(s) appears {"\n"}here on your watchlist</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={tw`shadow-md py-3 px-4 rounded-lg mt-4 bg-white`}>
          <Text style={tw`text-xl text-blue-600`}>See Assets</Text>
      </TouchableOpacity>
      </View>
    </View>
    ) : (
        <View style={tw`mt-4 mx-4`}>
           {!favourites && <Text style={tw`text-2xl font-medium`}>Watchlist</Text> }
            <View style={tw`shadow-lg bg-white py-4 px-4 rounded-2xl mt-2`}>
                <ScrollView>
                  {DummyData1.map((item, index) => (
                    <MiniWatchListCard key={index * item.id} item={item} />
                  ))}
                </ScrollView>
            </View>
        </View>
    )}
    </>
  );
};

export default WatchList;
