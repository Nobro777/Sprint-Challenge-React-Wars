import React from 'react';
import { Card, CardText, CardBody, CardTitle, Col} from 'reactstrap';
import styled from 'styled-components';

function NamesList(props) {

const Card = styled.div`
border: 1px solid black;
border-radius: 1rem;
margin: 5% 0 5% 0;
background-color: lightgray;
opacity: .4;
&:hover {
    opacity: 1;
    transition: .4s ease-in-out;
    cursor: pointer;
}
`
const CardTitle = styled.div`
font-size: 2rem;
font-family: 'Permanent Marker', cursive;
margin: 0 0 4% 0;
border-bottom: 1px dotted black;
`
const CardText = styled.p`
font-size: 1rem;
font-family: 'Fredoka One', cursive;
`


return (
    <Col xs="12" s="6" md="6">
        <Card key={props.id}>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>Height: {props.height}</CardText>
                <CardText>Mass: {props.mass}</CardText>
                <CardText>Gender: {props.gender}</CardText>
                <CardText>Eye Color: {props.eye_color}</CardText>
                <CardText>Skin Color: {props.skin_color}</CardText>
                <CardText>Hair Color: {props.hair_color}</CardText>
                <CardText>Born: {props.birth_year}</CardText>
            </CardBody>
        </Card>
    </Col>
    );


};

export default NamesList;