import { StyleSheet } from 'react-native';

export const colores = {
    primary: '#5856D6',

}


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        color: 'black',
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuBoton: {
        marginVertical: 10
    },
    menuTexto: {
        color: 'black',
        fontSize: 20
    },
    contentContacts :{
        flex: 1,
        backgroundColor: 'cyan'
    },
    tittleContacts: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textPerfil: {
        color: 'black',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 18
    }
    
});