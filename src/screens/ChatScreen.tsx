import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ChatScreen = () => {

    const { authState } = useContext(AuthContext)
    const { name } = authState

    return (
        <View style={ styles.contentContacts }>
            <Text style={styles.tittleContacts }>name: { JSON.stringify(name) }</Text>
        </View>
    )
}
