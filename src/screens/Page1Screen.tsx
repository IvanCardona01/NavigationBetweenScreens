import React, { useEffect, useReducer } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
// import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

const initialState = "undefine"

const reducer = (state: string, age: number): string => {
    if (age >= 18){
        return 'is adult'
    }else {
        return 'is not adult'
    }
}

export const Page1Screen = ({ navigation }: Props ) => {

const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={ () => navigation.toggleDrawer()  }
                >
                    <Icon 
                        name="menu-outline"
                        color={ colores.primary }
                        size={ 35 }
                    />
                </TouchableOpacity>
            )
        })


    }, [])



    return (
        <View style={ styles.globalMargin }>
            <Text style={styles.title }>Page1Screen </Text>

            <Button 
                title="Go to page 2"
                onPress={ () => navigation.navigate('Page2Screen') }
            />
            <Text style={{ 
                marginVertical: 20,
                fontSize: 20,
                color: 'black',
             }}> Navigation with arguments
            </Text>

            <Button title='Reducer' onPress={() => dispatch(13)} />
            <Text style={ {
                marginVertical: 20,
                fontSize: 15,
                color: 'black',}}>reducer state: {state} </Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={ () => navigation.navigate('PersonScreen', {
                        id: 1,
                        name: 'Pedro'
                    }) }
                >
                    <Icon 
                        name="body-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={ styles.botonGrandeTexto }>Pedro</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={{ 
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={ () => navigation.navigate('PersonScreen', {
                        id: 2,
                        name: 'Maria'
                    }) }
                >
                    <Icon 
                        name="woman-outline"
                        color="white"
                        size={ 35 }
                    />
                    <Text style={ styles.botonGrandeTexto }>Maria</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
