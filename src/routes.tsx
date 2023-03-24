import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Testing from './screens/Testing';

const { Navigator, Screen } = createStackNavigator();

export function Routes(){
  return(
    <NavigationContainer>
      <Navigator        
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'transparent'
          }
        }}
      >
        <Screen
          name="Onboarding"
          component={Onboarding}
        />
        <Screen
          name="Home"
          component={Home}
        />
        <Screen
          name="Testing"
          component={Testing}
        />
      </Navigator>
    </NavigationContainer>
  )
}