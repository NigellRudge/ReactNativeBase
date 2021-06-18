import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native'
import Ionicon from 'react-native-vector-icons'
import Theme from '../utils/Theme';

const BaseComponent = ({color = Theme.colors.primary,borderRadius = 3,icon = null})=>{
    return(
        <TouchableOpacity style={{...styles.container, borderRadius:3, backgroundColor:color}}>
            <Text style={}>Screen1</Text>
        </TouchableOpacity>
    )
}
export default BaseComponent;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: Theme.padding.p1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontWeight:'bold',
        fontSize: Theme.textSize.h2
    }
})
