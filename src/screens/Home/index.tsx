import React, { useEffect, useState } from 'react';
import { Container, Row, Logo, Title, Loading, CarrosselDoctors } from './style';
import TestingService from '../../database/services/testing-service';
import { useQuery } from "@apollo/client";
import { queryDoctors } from '../../api/graphQlClient/query';

import logo from '../../assets/logo.png';
import CardTest from '../../components/CardTest';
import CardDoctor from '../../components/CardDoctor';

function Home() {
    const [testings, setTestings] = useState([]);
    const { loading, error, data } = useQuery(queryDoctors);

    useEffect(() => {
        TestingService.findAllTestings().then((response: any) => {
            setTestings(response._array);
        });
    }, [])

    return (
        <Container>
            <Row>
                <Logo
                    source={logo}
                />
            </Row>
            <Row>
                <Title>Olá, qual teste deseja fazer?</Title>
            </Row>
            {
                testings.length > 0 ?
                <React.Fragment>
                    {(() => {
                        const rows = [];
                        for (let i = 0; i < testings.length; i += 2) {
                            rows.push(
                                <Row key={i}>
                                    <CardTest
                                        id={testings[i].id}
                                        icon="heart"
                                        name={testings[i].name}
                                        page="Testing"
                                    />
                                    {testings[i + 1] && (
                                        <CardTest
                                            id={testings[i + 1].id}
                                            icon="heart"
                                            name={testings[i + 1].name}
                                            page="Testing"
                                        />
                                    )}
                                </Row>
                            );
                        }
                        return rows;
                    })()}
                </React.Fragment>
                :
                <Loading 
                    size="large" 
                    color="#2CCCD3" 
                />
            }
            {
                loading && 
                    <Loading 
                    size="large" 
                    color="#2CCCD3" 
                />
            }
            {
                error && 
                <Title>Error! {error.message}</Title>
            }
            {
                data && (
                    <>
                        <Row>
                            <Title>Nossos profissionais</Title>
                        </Row>
                        <CarrosselDoctors
                            horizontal={true} 
                        >
                            {
                                data.doctors.map(doctor => (
                                    <CardDoctor
                                        avatar={doctor.avatar.url}
                                        name={doctor.name}
                                        whatsapp={doctor.whatsapp}
                                        specialty={doctor.specialty}
                                        code={doctor.code}
                                        amount={doctor.amount}
                                    />
                                ))
                            }
                        </CarrosselDoctors>
                    </>
                )
            }
        </Container>
    )
}

export default Home;