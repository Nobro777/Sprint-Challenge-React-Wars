import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NamesList from "./NamesList";
import { Container, Row } from "reactstrap";

function CharNames(){

    const [Name, setName] = useState([]);

    useEffect(()=>{
        axios
        .get("https://swapi.co/api/people")
        .then(resp =>{
            setName(resp.data.results)
            console.log(resp);
        })
        .catch(error =>{
            console.log(error);
        })
    },[])

    return (
        <Container>
            <Row>
        {Name.map((character)=>{
            return (
                <NamesList 
                name = {character.name}
                gender = {character.gender}
                mass = {character.mass}
                height ={character.height}
                eye_color = {character.eye_color}
                hair_color = {character.hair_color}
                skin_color = {character.skin_color}
                birth_year = {character.birth_year}
                />
            )
        })}
        </Row>
        </Container>

    )


}

export default CharNames;