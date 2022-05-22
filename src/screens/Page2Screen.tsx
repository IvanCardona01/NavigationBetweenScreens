import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';


export const Page2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hello World!',
            headerBackTitle: ''
        })
    }, [])


    return (
        <View style={ styles.globalMargin }>
            <Text style={styles.title }> Page2Screen </Text>

        </View>
    )
}
