import styled from 'styled-components/native';
import { theme } from '../../global/theme';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

import { Feather } from '@expo/vector-icons';

export const ButtonWhatsApp = styled.TouchableOpacity`
  background-color: ${theme.colors.three};
  width: ${width * 0.55};
  height: ${width * 0.55};
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

export const FeatherIcons = styled(Feather)`
  font-size: 25px;
  color: #FFF;
  margin-bottom: 5px;
`

export const Avatar = styled.Image`
  width: ${width * 0.15};
  height: ${width * 0.15};
  border-radius: 100px;
`

export const TitleName = styled.Text`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.rajdhani700};
  font-size: 20px;
  text-align: center;
  width: 100%;
`

export const TitleSpecialty = styled.Text`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.rajdhani700};
  font-size: 15px;
  text-align: center;
  width: 100%;
`

export const TitleCode = styled.Text`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.rajdhani700};
  font-size: 12px;
  text-align: center;
  width: 100%;
`

export const TitleAmount = styled.Text`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.rajdhani700};
  font-size: 12px;
  text-align: center;
  width: 100%;
`

export const WhatsappButton = styled.View`
  background-color: ${theme.colors.secondary};
  width: 100%;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const WhatsappTile = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.rajdhani700};
  font-size: 15px;
  text-align: center;
  padding: 5px;
`