import React from 'react';
import { ButtonWhatsApp, Avatar, TitleName, TitleSpecialty, TitleCode, TitleAmount, WhatsappButton, WhatsappTile, FeatherIcons } from './style';
import { Linking } from 'react-native';

interface ICardDoctor{
    avatar: string,
    name: string,
    whatsapp: string,
    code: string,
    specialty: string,
    amount: string
  }

export default function CardDoctor({ avatar, name, whatsapp, code, specialty, amount }:ICardDoctor){
    return(
      <ButtonWhatsApp
        onPress={async ()=> {
          await Linking.openURL(whatsapp)
        }}
      >
        <Avatar
          source={{
            uri: `${avatar}`
          }}
        />
        <TitleName>{name}</TitleName>
        <TitleSpecialty>{specialty}</TitleSpecialty>
        <TitleCode>{code}</TitleCode>
        <TitleAmount>R$ {amount}</TitleAmount>
        <WhatsappButton>
          <FeatherIcons 
            name='message-circle'
          />
          <WhatsappTile>
            Whatsapp
          </WhatsappTile>
        </WhatsappButton>
      </ButtonWhatsApp>
    )
  }