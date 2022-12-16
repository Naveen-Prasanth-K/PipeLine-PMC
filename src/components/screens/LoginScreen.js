import { useNavigation } from '@react-navigation/native';
import { Button, ButtonGroup } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../Utilities/constants/styles';

export default function LoginScreen() {
    const [selection, setSelection] = useState(1);

    const navigation = useNavigation();
    function PageNavHandler() {
        navigation.navigate('HomeScreen');
    }
    return (
        <LinearGradient colors={['#6FB1FC', '#4364F7', '#0052D4']} start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
            <SafeAreaView>
                <View style={styles.container1}>
                    <Image source={require('../../images/wave.png')} style={styles.image} />
                </View>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={[styles.btn, selection === 1 ? { backgroundColor: GlobalStyles.colors.blue175 } : null]} onPress={() => setSelection(1)}>
                        <Text style={[styles.btnText, selection === 1 ? { color: "white" } : null]}>TWAD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: GlobalStyles.colors.blue175 } : null]} onPress={() => setSelection(2)}>
                        <Text style={[styles.btnText, selection === 2 ? { color: "white" } : null]}>Consultancy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, selection === 3 ? { backgroundColor: GlobalStyles.colors.blue175 } : null]} onPress={() => setSelection(3)}>
                        <Text style={[styles.btnText, selection === 3 ? { color: "white" } : null]}>Contractor</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <TextInput
                        style={styles.textInputBox}
                        placeholder={"UserID / Mobile No"}
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                        maxLength={10}
                    />
                    <TextInput
                        style={styles.textInputBox}
                        placeholder={"Password"}
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                        maxLength={10}
                    />
                    <TouchableOpacity>
                        <Text style={styles.forget}>Forget UserID/Password?</Text>
                    </TouchableOpacity>
                    <Button
                        title="Login"
                        buttonStyle={{
                            backgroundColor: GlobalStyles.colors.blue175,
                            borderRadius: 30,
                            margin: 10,
                            padding: 10
                        }}
                        containerStyle={{
                            width: 150,
                            alignSelf: 'center',
                            marginTop: 60
                        }}
                        onPress={PageNavHandler}
                    />
                </View>
                <View style={styles.container2}>

                </View>

            </SafeAreaView>

        </LinearGradient>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        marginVertical: 20,
    },
    textInputBox: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary100,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginVertical: '5%',
        marginHorizontal: 15,
        borderRadius: 50,
    },
    forget: {
        fontSize: 15,
        alignSelf: 'flex-end',
        marginHorizontal: 10,
        color: GlobalStyles.colors.blue200
    },
    card: {
        backgroundColor: GlobalStyles.colors.primary50,
        borderTopRightRadius: 60,
        borderBottomLeftRadius: 60,
        paddingHorizontal: 20,
        paddingVertical: 30,
        elevation: 10,
        marginHorizontal: 25
    },
    container1: {

    },
    container2: {

    },

    selectedButtonStyle: {
        backgroundColor: GlobalStyles.colors.activeblue,

    },
    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 20,
        marginVertical: 30,
        borderRadius: 50,
        backgroundColor: 'white'
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        borderRadius: 46 / 2,
        justifyContent: 'center',
        height: 46,

    },
    btnText: {
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 16,
    },
});