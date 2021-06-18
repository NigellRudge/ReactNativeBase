import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native'

const Screen1 = ({navigation})=>{
    return(
        <View style={styles.screen}>
            <Text>Screen1</Text>
        </View>
    )
}
export default Screen1;

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
