import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/home/Home";
import Game from './pages/home/game/Game';
import Details from './pages/home/details/Details';
import Header from './components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/details" element={<Details />}/>
            <Route path="/game-on" element={<Game />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;