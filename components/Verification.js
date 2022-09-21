import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const Stack = createNativeStackNavigator();
const Verification = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeaderCode}>Code</Text>
                <Text style={styles.textVerification}>Verification</Text>
            </View>
            <View style={styles.body}>
                <Text style={{fontWeight: 'bold'}}>CODE VERIFICATION Enter ontime password sent on </Text>
                <Text style={{fontWeight: 'bold'}}>++849092605798 VERIFY CODE</Text>
            </View>
            <View style={styles.phoneCode}>
                <TextInput style={styles.veryficationCode}></TextInput>
                <TextInput style={styles.veryficationCode}></TextInput>
                <TextInput style={styles.veryficationCode}></TextInput>
                <TextInput style={styles.veryficationCode}></TextInput>
                <TextInput style={styles.veryficationCode}></TextInput>
                <TextInput style={styles.veryficationCode}></TextInput>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Verify code</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginTop: 30,
      
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeaderCode: {
        textTransform: 'uppercase',
        fontSize: 80,
        fontWeight: 'bold',
    },
    textVerification: {
        marginTop: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    body: {
        height: '15%',
  
        justifyContent: 'center',
        alignItems: 'center',
    },
    veryficationCode: {
        width: 50,
        height: 50,
        borderWidth: 1,
    },
    phoneCode: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: '18',
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: '#E3C000',
        height: 45,
        marginTop: 60,
        marginRight: 25,
        marginLeft: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Verification;
