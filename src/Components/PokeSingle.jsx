import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const PokeSingle = () => {
    const [data, setData] = useState([]);
    const params = useParams()
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
        .then(res => {
            setData(res.data)
        })
    }, [])
    return (
        <div>
            <h2>{data.name}</h2>
            <img src={data.sprites?.other.home.front_default} alt={data.name} />
            <div>{data.types.type}</div>
        </div>
    );
};

export default PokeSingle;