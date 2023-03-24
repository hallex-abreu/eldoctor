import styled from 'styled-components/native';
import { theme } from '../../global/theme';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

export const Container = styled.ScrollView`
    flex:1;
    margin-top: 50px;
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
    padding: 30px;
`

export const Loading = styled.ActivityIndicator`
    height: ${width * 1.2};
`

export const CarrosselDoctors = styled.ScrollView`
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
`