import React from 'react'
import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import WelcomeCard from '../components/WelcomeCard'
import tw from 'tailwind-react-native-classnames'
import CryptoBasicCard from '../components/CryptoBasicCard'
import WatchList from '../components/WatchList'
import TopMovers from '../components/TopMovers'

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <ScrollView>
            <WelcomeCard />
            <CryptoBasicCard />
            <WatchList />
            <TopMovers />
    
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

