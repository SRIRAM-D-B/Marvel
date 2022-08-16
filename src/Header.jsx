import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import Character from "./Characters/Character";
import Comic from "./Comics/Comic";
import Event from "./Events/Event";
import Series from "./Series/Series";
import Stories from "./Stories/Story";
import Creator from "./Creators/Creator";

const Header = () => {
    return (
        <div>
            {
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route exact path="/" element={<Home />}/>
                            <Route exact path="/characters" element={<Character />}/>
                            <Route exact path="/comics" element={<Comic />}/>
                            <Route exact path="/creators" element={<Creator />}/>
                            <Route exact path="/events" element={<Event />}/>
                            <Route exact path="/series" element={<Series />}/>
                            <Route exact path="/story" element={<Stories />}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            }
        </div>
    )
}

export default Header