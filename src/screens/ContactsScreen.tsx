import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color, sin } from 'react-native-reanimated';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContactsScreen = () => {

    const { authState, singIn, singOut } = useContext(AuthContext)

    const { isLoggedIn, name, favoriteIcon } = authState

    const getViewLogin = () => {
        if(isLoggedIn){
            return (
                <View>
                    <Text style={ styles.textPerfil }>Name: { name }</Text>
                    <Text style={ styles.textPerfil }>Favorite Icon: { favoriteIcon }</Text>
                    <TouchableOpacity onPress={ singOut } style={{ marginLeft: 20, backgroundColor: 'gray', width: 60, height: 40, justifyContent: 'center', alignSelf: 'center' } } >
                            <Text style={ {color: 'black', textAlign: 'center'}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            )
        }else {
            return(
                <View>
                    <TouchableOpacity onPress={ singIn } style={{ marginLeft: 20, backgroundColor: 'gray', width: 60, height: 40, justifyContent: 'center', alignSelf: 'center' } } >
                            <Text style={ {color: 'black', textAlign: 'center'}}>Login</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    return (
        <View style={ styles.contentContacts }>
            <Text style= { styles.tittleContacts }>My Perfil</Text>
            <Text style={ styles.textPerfil }>Atenticate: { JSON.stringify(isLoggedIn) }</Text>
            { getViewLogin() }
        </View>
    )
}
