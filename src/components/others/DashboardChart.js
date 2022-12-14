import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
    BarChart, ContributionGraph, LineChart, PieChart,
    ProgressChart, StackedBarChart
} from "react-native-chart-kit";
import { DashboardChartData } from '../../Utilities/Data/DummyData';

export default function DashboardChart() {
    const screenWidth = Dimensions.get("window").width;

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <LineChart
                data={DashboardChartData}
                width={screenWidth * 0.95} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: "#809af8",
                    backgroundGradientFrom: "#9aa7fb",
                    backgroundGradientTo: "#73aaf8",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#2600ff"
                    }
                }}
                bezier
                style={{
                    marginVertical: 10,
                    borderRadius: 20,
                }}
            />
            <Text style={styles.chartHeading} >Progress Chart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    chartHeading: {
        fontSize: 18,
        fontWeight: '600'
    }
})