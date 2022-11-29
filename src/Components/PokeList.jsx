import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./PokeList.css";
import Card from "./Card";

const PokeList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => {
        const fetches = res.data.results.map((p) => {
          return axios.get(p.url).then((res) => res.data);
        });
        Promise.all(fetches).then((res) => {
          setData(res);
          setisLoading(false);
        });
      });
  }, []);

  return (
    <div className="row">
      {data.map((card) => (
        <Card
          key={card.name}
          name={card.name}
          image={card.sprites.other.home.front_default}
        />
      ))}
    </div>
  );
};

export default PokeList;
