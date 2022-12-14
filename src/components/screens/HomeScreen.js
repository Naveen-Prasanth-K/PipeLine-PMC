import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../Utilities/constants/styles';
import { DashboardList } from '../../Utilities/Data/DummyData';
import DashboardChart from '../others/DashboardChart';

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.projectName}>Project Name</Text>
                    <Text style={styles.projectcat}>CWS 986 Rajapalayam Sathur Vaigai</Text>
                </View>
                <DashboardChart />
                <View style={styles.listFlex}>
                    {DashboardList.map((item, index) => (
                        <View key={index} style={styles.listContainer}>
                            <Text style={{ flexWrap: 'wrap', width: '100%', textAlign: 'center' }}>{item.list}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
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

    },
    listContainer: {
        width: 150,
        height: 150,
        borderWidth: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        backgroundColor: GlobalStyles.colors.primary100
    }

})