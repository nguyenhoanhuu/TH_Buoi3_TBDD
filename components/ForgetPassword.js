import React from 'react';
import {
    Button,
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ForgetPassword = ({ navigation }) => {
    return (
        <ImageBackground source={require('../img/backgroundscreen2.png')} resizeMode="cover" style={{ flex: 1 }}>
            <View style={styles.header}>
                <Image source={require('../img/lock.png')} />
                <View style={styles.textHeader}>
                    <Text style={styles.textHeaderStyle}>FORGET</Text>
                    <Text style={styles.textHeaderStyle}>PASSWORD</Text>
                </View>
            </View>
            <View style={styles.textBody}>
                <Text style={styles.textStyle}>Provide your account’s email for which you </Text>
                <Text style={styles.textStyle}>want to reset your password</Text>
            </View>
            {/* <View style={styles.input}>
                <TextInput style={styles.textInputStyle} keyboardType="numeric" placeholder="Email"></TextInput>
                <MaterialCommunityIcons name="email-outline" size={27} color="black"  style={{position: "absolute",top: 12,left: 10,zIndex:10}}/>
            </View> */}
            <View style={styles.input}>
                <Image source={require('../img/email.png')} resizeMode='stretch' style={{ width: 45, height: '100%' }}></Image>
                <TextInput placeholder="Email" style={styles.textInput}></TextInput>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Verification')}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default ForgetPassword;

const styles = StyleSheet.create({
    header: {
        marginTop: 90,
        alignItems: 'center',
    },
    textHeader: {
        marginTop: 30,
        alignItems: 'center',
    },
    textHeaderStyle: {
        fontWeight: 'bold',
        fontSize: 19,
    },
    textBody: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: '17',
    },
    input: {
        marginTop:35,
        height: 50,
        width: windowWith - 60,
        marginLeft: 30,
        backgroundColor: '#C4C4C4',
        flexDirection: 'row',
    },
    textInput: {
        marginLeft: 15,
        height: '100%',
        flex: 1,
    },
    button: {
        backgroundColor: '#E3C000',
        height: 45,
        // paddingHorizontal:10,
        // paddingVertical:14
        marginTop: 60,
        marginRight: 25,
        marginLeft: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // buttonStyle: {
    //     borderWidth: 1,
    //     width: 305,
    //     height: 45,
    //     backgroundColor:'#333'
    // },
    buttonText: {
        fontWeight: 'bold',
        fontSize: '18',

        textTransform: 'uppercase',
    },
});
