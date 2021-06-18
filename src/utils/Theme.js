import React from 'react'
import { Dimensions } from 'react-native'

const Theme = {
    colors: {
        primary: '#fff',
        secondary: '#fff',
        danger: '#fff',
        success: '#fff',
        warning: '#fff',
        info: '#fff'
    },
    textSize: {
        h1: 30,
        h2: 25,
        h3: 20,
        h4: 16,
        h5: 13
    },
    padding: {
        p1: 10,
        p2: 15,
        p3: 18,
        p4: 24,
        p5: 28
    },
    margin: {
        m1: 10,
        m2: 15,
        m3: 18,
        m4: 24,
        m5: 28
    },
    screenWidth: Dimensions.get('screen').width,
    screenHeight: Dimensions.get('screen').height
}
export default Theme;
