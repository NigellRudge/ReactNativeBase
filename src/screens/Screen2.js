import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native'

const Screen2 = ({navigation})=>{
    return(
        <View style={styles.screen}>
            <Text>Screen1</Text>
        </View>
    )
}
export default Screen2;

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
