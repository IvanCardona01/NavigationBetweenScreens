import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {

    const { authState } = useContext(AuthContext)

    const insets = useSafeAreaInsets();

    return (
        <View style={{ 
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={ styles.title }>Settings Screen : {JSON.stringify(authState.isLoggedIn) } </Text>
            
        </View>
    )
}
