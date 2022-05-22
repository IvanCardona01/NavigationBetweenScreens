import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{};

export const PersonScreen = ( { route, navigation }: Props ) => {

    const params = route.params;
    console.log(params)

    useEffect( () => {

        navigation.setOptions({
            title: params.nombre
        })

    },[])



    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                {
                    JSON.stringify( params, null, 3 )
                }

            </Text>
        </View>
    )
}
