import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons, images } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'


const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS}}>
            {/* COLORS.darmMode will start the dark mode adventure */}
            <Stack.Screen 
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="95%"/>
                ),
                headerTitle: "Jake's App"
            }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                <Welcome />
                <Popularjobs />
                <Nearbyjobs />
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;