import styled from 'styled-components/native';
import { theme } from '../../global/theme';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex:1;
`

export const Carrossel = styled.ScrollView``

export const FeatherIcons = styled(Feather)`
  font-size: 25px;
  color: ${theme.colors.primary};
  margin-top: 2px;
`

export const Content = styled.View`
    width: ${width};
    justify-content: center;
    align-items: center;
`

export const Image = styled.Image`
    width: ${width * 0.6};
    height: ${width * 0.6};
`

export const Description = styled.Text`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.inter400};
    font-size: 20px;
    text-align: center;
    margin: 30px;
`

export const RowBullet = styled.View`
    width: ${width};
    justify-content: center;
    flex-direction: row;
`

export const Bullet = styled.View`
    background-color: ${theme.colors.three};
    width: 10px;
    height: 10px;
    border-radius: 100px;
    margin: 5px;
`

export const BulletSelected = styled.View`
    background-color: ${theme.colors.secondary};
    width: 10px;
    height: 10px;
    border-radius: 100px;
    margin: 5px;
`

export const ContinueButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 30px;
`

export const TitleButton = styled.Text`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.inter400};
    font-size: 20px;
    text-align: center;
    margin-right: 10px;
`