import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";
import styled from 'styled-components';

    const ButtonsGroup = props => {
    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);

    const onCheckboxBtnClick = selected => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
        cSelected.push(selected);
        } else {                                    
        cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    };

    const Paras = styled.p`
    color: black;
    font-weight: bold;
    text-decoration: underline;
    margin: 1.5% 0 1.5% 0;
    `
    const ButtonHeading = styled.h5`
    margin: 3% 0 2% 0%;
    text-decoration: underline;
    `
    const Button = styled.button`
    margin: 2% 2% 2% 2%;
    border: 2px solid black;
    border-radius: .5rem;
    font-weight: bold;
    &: hover{
        background-color: green;
    }
    `
    const ContainerDiv = styled.div`
    margin: 2% 11.75% 5% 11.75%;
    border: 2px solid black;
    background-color: lightgray;
    border-radius: .5rem;
    opacity: .4;
    &:hover {
    opacity: 1;
    transition: .4s ease-in-out;
}

    `

    return (
        <ContainerDiv>
        <ButtonHeading>Rate the Project!</ButtonHeading>
        <ButtonGroup>
            <Button
            color="primary"
            onClick={() => setRSelected('1 Star')}
            active={rSelected === 1}
            >
            One
            </Button>
            <Button
            color="primary"
            onClick={() => setRSelected('2 Stars')}
            active={rSelected === 2}
            >
            Two
            </Button>
            <Button
            color="primary"
            onClick={() => setRSelected(`3 Stars`)}
            active={rSelected === 3}
            >
            Three
            </Button>
        </ButtonGroup>
        <Paras>{rSelected}</Paras>
        </ContainerDiv>
    );
    };

    export default ButtonsGroup;
