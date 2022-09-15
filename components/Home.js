import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../img/background.png')}
                resizeMode="cover"
                style={{ flex: 1, justifyContent: 'center' }}
            >
                <View style={styles.header}>
                    <Image source={require('../img/circle.png')} style={styles.circle} />
                    <Text style={[styles.headerText, { marginTop: 50 }]}>GROW </Text>
                    <Text style={[styles.headerText]}>YOUR BUSINESS </Text>
                </View>
                <View style={styles.centerText}>
                    <Text style={styles.centerText1}>We will help you to grow your business using </Text>
                    <Text style={styles.centerText1}>online server</Text>
                </View>

                <View style={styles.body}>
                    <TouchableOpacity
                        style={styles.touchableOpacity}
                        onPress={() => navigation.navigate('ForgetPassword')}
                    >
                        <Text style={{ fontWeight: 'bold' }}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacity}>
                        <Text style={{ fontWeight: 'bold' }}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.bottomText}>HOW WE WORK?</Text>
                </View>

                <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'linear-gradient(180deg, rgba(189, 246, 198, 0) 0%, #BDF6C6 100%)',
    },

    circle: {
        marginTop: 50,
    },
    header: {
        marginTop: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    centerText: {
        marginTop: 50,
        alignItems: 'center',
    },
    centerText1: {
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },

    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 90,
        marginLeft: 50,
        marginRight: 50,
    },
    bottom: {
        marginTop: 80,
        alignItems: 'center',
    },
    touchableOpacity: {
        padding: 10,
        backgroundColor: '#F2DD1B',
    },
    bottomText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default Home;
