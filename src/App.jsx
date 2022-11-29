import { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import PokeList from "./Components/PokeList";
import About from "./Components/About";
import Layout from "./Pages/Layout";
import PokeSingle from "./Components/PokeSingle";

const RouterWrapper = (props) =>{
  const params = useParams();
  return <PokeSingle params={params} {...props}/>
} 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokelist" element={<PokeList />} />
            <Route path="pokelist/:pokesingle" element={<RouterWrapper/>}/>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
