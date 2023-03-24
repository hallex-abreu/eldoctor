import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import DatabaseInit from './src/database/db-init';

import { ApolloProvider } from "@apollo/client";
import client from "./src/api/graphQlClient";

import { Routes } from './src/routes';

export default function App() {
  new DatabaseInit
  
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  } 
  return (
    <ApolloProvider client={client}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes/>
    </ApolloProvider>
  );
}