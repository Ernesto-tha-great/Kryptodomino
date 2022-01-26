import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from '../components/Header'
import WatchList from '../components/WatchList'

const FavouriteScreen = ({navigation}: any) => {
    return (
        <SafeAreaView>
          <Header title='Favourites(s)' navigation={navigation} />
            <WatchList favourites={true} />
            
        </SafeAreaView>
    )
}

export default FavouriteScreen
