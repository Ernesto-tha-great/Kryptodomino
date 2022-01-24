import React from 'react'
import { View, Text, SafeAreaView} from 'react-native'
import WelcomeCard from '../components/WelcomeCard'
import tw from 'tailwind-react-native-classnames'
import CryptoBasicCard from '../components/CryptoBasicCard'
import WatchList from '../components/WatchList'

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <WelcomeCard />
            <CryptoBasicCard />
            <WatchList />
        </SafeAreaView>
    )
}

export default HomeScreen

