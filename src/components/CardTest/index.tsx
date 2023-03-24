import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TestButton, FeatherIcons, Title } from './style';

interface ICardTest{
    id: number,
    icon: string,
    name: string,
    page: string,
  }

export default function CardTest({id, icon, name, page}:ICardTest){
    const navigation:any = useNavigation();
    return(
      <TestButton
        onPress={()=>navigation.navigate(`${page}`, {
          id,
          name
        })}
      >
        <FeatherIcons 
          name={`${icon}`}
        />
        <Title>{name}</Title>
      </TestButton>
    )
  }