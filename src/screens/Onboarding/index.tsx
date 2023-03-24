import React from 'react';
import { Bullet, BulletSelected, Carrossel, Container, Content, ContinueButton, Description, FeatherIcons, Image, RowBullet, TitleButton } from './style';
import onboarding1 from '../../assets/onboarding-1.png';
import onboarding2 from '../../assets/onboarding-2.png';
import onboarding3 from '../../assets/onboarding-3.png';

function Onboarding({navigation}){  
    return (
        <Container>
            <Carrossel
                horizontal={true} 
                pagingEnabled={true}
            >
                <Content>
                    <Image
                        source={onboarding1}
                    />
                    <Description>
                        Bem-vindo ao El Doctor,
                        o app que te ajuda a descobrir 
                        se você tem características de 
                        neurodiversidade com testes 
                        rápidos e confiáveis.
                    </Description>
                    <RowBullet>
                        <BulletSelected/>
                        <Bullet/>
                        <Bullet/>
                    </RowBullet>
                </Content>
                <Content>
                    <Image
                        source={onboarding2}
                    />
                    <Description>
                        Aqui você pode fazer testes sobre
                        diversos temas, como TDAH, 
                        autismo, dislexia, bipolaridade 
                        entre outros.
                    </Description>
                    <RowBullet>
                        <Bullet/>
                        <BulletSelected/>
                        <Bullet/>
                    </RowBullet>
                </Content>
                <Content>
                    <Image
                        source={onboarding3}
                    />
                    <Description>
                        Para começar, escolha um teste que te interessa 
                        e responda às perguntas. Ao final, você 
                        receberá um resultado com orientações 
                        e recursos para lidar com 
                        a sua neurodiversidade.
                    </Description>
                    <RowBullet>
                        <Bullet/>
                        <Bullet/>
                        <BulletSelected/>
                    </RowBullet>
                    <ContinueButton
                        onPress={()=> {navigation.navigate('Home')}}
                    >
                        <TitleButton>
                            Continuar
                        </TitleButton>
                        <FeatherIcons 
                            name='chevron-right'
                        />
                    </ContinueButton>
                </Content>
            </Carrossel>
        </Container>
    )
}

export default Onboarding;