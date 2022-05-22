import 'react-native-gesture-handler';

import React, { Children } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import { LateralMenu } from './src/navigator/LateralMenu';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <LateralMenu />
        {/* <Tabs /> */}
      </AppState>
        
    </NavigationContainer>
  )
}


const AppState = ({ children }: any) => {
  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}



export default App;
