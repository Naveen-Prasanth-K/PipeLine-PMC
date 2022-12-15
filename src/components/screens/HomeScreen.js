import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../Utilities/constants/styles';
import { DashboardList } from '../../Utilities/Data/DummyData';
import DashboardChart from '../others/DashboardChart';

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
    return (
        <>
            <StatusBar backgroundColor={'#f3d8fe'} />
            <SafeAreaView>
                <ScrollView>
                    <LinearGradient colors={['#f3d8fe', '#b6cbfc',]} start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.projectName}>Project Name</Text>
                            <Text style={styles.projectcat}>CWS 986 Rajapalayam Sathur Vaigai</Text>
                        </View>
                        <DashboardChart />
                        <View style={styles.listFlex}>
                            {DashboardList.map((item, index) => (
                                <TouchableOpacity key={index} style={styles.listContainer}>
                                    <Text style={styles.topic}>{item.list}</Text>
                                    <Image source={item.image} style={styles.image} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </LinearGradient>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    projectName: {
        fontSize: 22,
        fontWeight: '700',
        color: GlobalStyles.colors.blue400,

    },
    projectcat: {
        fontSize: 16,
        fontWeight: '500',
        color: GlobalStyles.colors.blue400,
        marginVertical: 10
    },
    listFlex: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-evenly',
        marginVertical: 10,

    },
    listContainer: {
        width: screenWidth / 2 * 0.85,
        height: 150,
        padding: 10,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        elevation: 10,
        borderRadius: 15,
    },
    topic: {
        flexWrap: 'wrap',
        width: '100%',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
        marginVertical: 10,
    },
    image: {
        width: 70,
        height: 70,
        position: 'absolute',
        right: 0,
        bottom: 0,
        margin: 10,
    }

})