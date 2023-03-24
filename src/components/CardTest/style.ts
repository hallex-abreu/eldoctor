import styled from 'styled-components/native';
import { theme } from '../../global/theme';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

import { Feather } from '@expo/vector-icons';

export const TestButton = styled.TouchableOpacity`
    background-color: ${theme.colors.secondary};
    width: ${width * 0.4};
    height: ${width * 0.4};
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

export const Title = styled.Text`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.rajdhani700};
    font-size: 20px;
    text-align: center;
    width: 100%;
    padding: 20px;
`