import styled from 'styled-components/native';
import { theme } from '../../global/theme';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

import { Feather } from '@expo/vector-icons';

export const Container = styled.ScrollView`
    flex:1;
    margin-top: 50px;
` 

export const FeatherIcons = styled(Feather)`
  font-size: 25px;
  color: ${theme.colors.primary};
  margin-top: 2px;
`

export const Row = styled.View`
    flex-direction: row;
    justify-content: center;
`

export const Logo = styled.Image`
    width: ${width * 0.4};
    height: ${width * 0.1};
`

export const Title = styled.Text`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.rajdhani700};
    font-size: 20px;
    text-align: left;
    width: 100%;
    padding-left: 30px;
    padding-top: 30px;
    padding-right: 30px;
`

export const Option = styled.Text`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.rajdhani500};
    font-size: 20px;
    text-align: left;
    width: 100%;
    padding: 30px;
`

export const Loading = styled.ActivityIndicator`
    height: ${width * 1.2};
`

export const RowOption = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    align-items: center;
`

export const TitleOption = styled.Text`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.rajdhani500};
    font-size: 20px;
`

export const SeeResultButton = styled.TouchableOpacity`
    background-color: ${theme.colors.secondary};
    padding: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 10px;
`

export const TitleButton = styled.Text`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.inter400};
    font-size: 15px;
    text-align: center;
`

export const NoItemTitle = styled.Text`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.rajdhani500};
    font-size: 20px;
    text-align: left;
    width: 100%;
    padding: 30px;
`

export const BackButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-left: 30px;
    margin-right: 30px;
`

export const TitleButtonBack = styled.Text`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.inter400};
    font-size: 15px;
    text-align: center;
`