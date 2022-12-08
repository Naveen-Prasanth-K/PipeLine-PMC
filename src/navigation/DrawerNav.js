// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Image, StyleSheet } from 'react-native';
// import 'react-native-gesture-handler';
// import HomeScreen from '../components/screens/HomeScreen';
// import { GlobalStyles } from '../Utilities/constants/styles';

// export default function DrawerNav() {
//     const Drawer = createDrawerNavigator();


//     return (
//         <>
//             <Drawer.Navigator
//                 screenOptions={{
//                     headerShown: false, headerTransparent: true,
//                     unmountOnBlur: true,
//                     drawerActiveTintColor: GlobalStyles.colors.activeblue,
//                     drawerInactiveTintColor: GlobalStyles.colors.blue300,
//                     drawerStyle: {
//                         paddingHorizontal: 15,
//                         backgroundColor: GlobalStyles.colors.primary50,
//                     },
//                     drawerLabelStyle: [{ fontSize: 16, fontWeight: '500' }]

//                 }}
//             >
//                 <Drawer.Screen name="Home" component={HomeScreen} />



//             </Drawer.Navigator>

//         </>

//     );
// }

// const styles = StyleSheet.create({
//     image: {
//         width: 24,
//         height: 22,
//         marginRight: -15,
//     }
// });