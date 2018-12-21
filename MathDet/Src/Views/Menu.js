import React from 'react';
import { Image, Text } from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Style from '../Styles/MenuStyle';

export default class Menu extends React.Component {
    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={Style.Grid}>
                    <Grid>
                        <Row size={14} style={Style.Col}>
                            <Text style={Style.Text}>Selección de Ítem</Text>
                        </Row>
                        <Row size={42} style={Style.Col}>
                            <Card style={Style.Card}>
                                <CardItem header bordered>
                                    <Text style={Style.Text}>Matrices</Text>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image source={require('../../assets/Images/matriz.png')} style={Style.Img} />
                                </CardItem>
                            </Card>
                        </Row>
                        <Row size={2}></Row>
                        <Row size={42} style={Style.Col}>
                            <Card style={Style.Card}>
                                <CardItem header bordered>
                                    <Text style={Style.Text}>Vectores</Text>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image source={require('../../assets/Images/vector.png')} style={Style.Img} />
                                </CardItem>
                            </Card>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}