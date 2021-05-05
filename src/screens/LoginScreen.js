import React from 'react';
import {
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    StyleSheet,
    AsyncStorage,
    Alert
} from 'react-native';
import { Container, Content, View } from 'native-base'


class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        };

    }
    myFun = () => {
        const { email, password, } = this.state;

        if (
            email != '' &&
            password != ''
        ) {
            this.props.navigation.navigate('ProfileScreen');
        }
        else {
            Alert.alert('plz enter all fields')
        }


    }

    render() {
        return (
            <View style={styles.Container}>
                 <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'blue', marginBottom: 20 }}>LOGIN</Text>
                <View>
                    <TextInput style={styles.input1}
                        placeholder='email'
                        onChangeText={(email) => { this.setState({ email }) }}
                    />
                </View>
                <View>
                    <TextInput style={styles.input2}
                        placeholder='Password'
                        onChangeText={(password) => { this.setState({ password }) }}
                    />
                </View>



                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={this.myFun}
                        style={[styles.buttonContainer, styles.loginButton]}

                    >
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    };
};

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,

    },
    buttonContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 350,
        borderRadius: 10,
        marginTop: 15,
    },
    loginButton: {
        backgroundColor: 'blue',
    },

    loginText: {
        color: 'white',

    },
    input1: {
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        width: 250,
        borderRadius: 10,
        paddingLeft: 10

    },
    input2: {
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        width: 250,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 20

    }

});



export default LoginScreen
