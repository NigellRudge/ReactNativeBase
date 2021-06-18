import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native'
import Ionicon from 'react-native-vector-icons'

const BaseComponent = ()=>{
    return(
        <View style={styles.container}>
            <Text>Screen1</Text>
        </View>
    )
}
export default BaseComponent;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
