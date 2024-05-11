import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation()

    const handleDrivingTestRequest = () => {
        navigation.navigate('DrivingTestRequest')
    }

    return(
        <View style={stylesHome.container}>
            <ScrollView>
                <View>
                    <Text style={stylesHome.title}>BIENVENIDO A MALUPE</Text>
                    <View style={stylesHome.imageContainer}>
                        <Image source={require('../assets/silueta.png')} style={stylesHome.image}/>
                    </View>
                    <Text style={stylesHome.text}> Ruedas como nunca antes</Text>

                    <View style={stylesHome.buttonContainer}>
                        <TouchableOpacity style={stylesHome.button} onPress={handleDrivingTestRequest}>
                            <Text style={stylesHome.buttonText}>DRIVING TEST REQUEST</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

const stylesHome= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192E50'
    },
    title:{
        color: '#FF4928',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10
    },
    image: {
        width: 400,
        height: 300,
        marginRight:65,
    },
    imageContainer: {
        backgroundColor: '#192E50',
        width: 500,
        height: 200,
        marginBottom: 15,
        alignItems: 'center',
        marginLeft: 0,
        marginTop: 10
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontStyle:'italic',
        textTransform: 'uppercase',
        marginVertical: 80,
        marginHorizontal:120
    },
    button: {
        backgroundColor: '#A8BAE6',
        width: '80%', 
        height: 50, 
        borderRadius: 25,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 30, 
        marginLeft: 45
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    buttonContainer: {
        flex: 1
    }, 
})

export default Home