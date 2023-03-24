import React, { useEffect, useState } from 'react';
import { Container, Row, Logo, Title, Loading, Option, RowOption, TitleOption, SeeResultButton, TitleButton, NoItemTitle, BackButton, FeatherIcons, TitleButtonBack } from './style';
import { RadioButton } from 'react-native-paper';
import { Alert } from 'react-native';

import logo from '../../assets/logo.png';
import OptionService from '../../database/services/option-service';

function Testing({route, navigation}) {
    const [options, setOptions] = useState([]);
    const [checked, setChecked] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        OptionService.findAllOptionsByTestingId(route.params.id).then((response: any) => {
            setLoading(false);
            setOptions(response._array);
        });
    }, [])

    const selectOption = (value: any) => {
        const new_checked = [...checked];
        const index = new_checked.findIndex((check: any) => check.id === value.id);

        index >= 0
            ? new_checked[index] = {id: value.id, option: value.option}
            : new_checked.push({id: value.id, option: value.option});

        setChecked(new_checked);
    }

    const seeResult = () => {
        const count = checked.map(check => check.option === 'yes');

        if(count.length > 12){
            setChecked([]);
            Alert.alert('Você pode ter essa neurodiversidade', 'Você pode ter essa neurodiversidade e deve procurar um psicólogo para uma avaliação mais detalhada.', [
                {
                  text: 'Cancelar',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'ver profissionais', onPress: () => {navigation.navigate('Home')}},
            ]);
          
        }
        else{
            setChecked([]);
            Alert.alert('Você provavelmente não tem essa neurodiversidade', 'Você provavelmente não tem essa neurodiversidade, mas pode ter outros problemas que afetam a sua atenção e o seu comportamento.', [
                {
                  text: 'Cancelar',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'ver profissionais', onPress: () => {navigation.navigate('Home')}},
            ]);
        }
    }

    return (
        <Container>
            <Row>
                <Logo
                    source={logo}
                />
            </Row>
            <BackButton
                onPress={()=> {navigation.navigate('Home')}}
            >
                <FeatherIcons 
                    name='chevron-left'
                />
                <TitleButtonBack>
                    Voltar
                </TitleButtonBack>
            </BackButton>
            <Row>
                <Title>{route.params.name}</Title>
            </Row>
            <Option>
                Nota importante: O teste a seguir não deve ser considerado como um diagnóstico definitivo. Para obter um diagnóstico preciso, é fundamental consultar um profissional qualificado. O objetivo deste teste é apenas fornecer uma indicação da probabilidade de ter essa neurodiversidade.
            </Option>
            {
                options.length > 0 ?
                    options.map((option, index) => (
                        <>
                            <Option key={option.id}>{index + 1} - {option.question}</Option>
                            <RadioButton.Group onValueChange={value => selectOption({ id: option.id, option: value })} value={checked.find(check => check.id === option.id) ? checked.find(check => check.id === option.id).option :'no'}>
                                <RowOption>
                                    <RadioButton value="no" />
                                    <TitleOption>Não</TitleOption>
                                </RowOption>
                                <RowOption>
                                    <RadioButton value="yes"/>
                                    <TitleOption>Sim</TitleOption>
                                </RowOption>
                            </RadioButton.Group>
                        </>
                    ))
                    :
                    loading ? 
                        <Loading
                            size="large"
                            color="#2CCCD3"
                        />
                    :
                    <Row>
                        <NoItemTitle>Teste não encontrado</NoItemTitle>
                    </Row>
            }
            <Row>
                <SeeResultButton
                    onPress={()=> {seeResult()}}
                >
                    <TitleButton>
                        Gerar resultado
                    </TitleButton>
                </SeeResultButton>
            </Row>
        </Container>
    )
}

export default Testing;