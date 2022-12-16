import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
    BarChart, ContributionGraph, LineChart, PieChart,
    ProgressChart, StackedBarChart
} from "react-native-chart-kit";
import { GlobalStyles } from '../../Utilities/constants/styles';
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
                    backgroundColor: "white",
                    backgroundGradientFrom: "white",
                    backgroundGradientTo: "white",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0,0,255,${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "white"
                    }
                }}
                // bezier
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
        fontWeight: '600',
        colors: GlobalStyles.colors.primary50
    }
})