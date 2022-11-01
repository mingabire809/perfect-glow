import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";

const Routing = ()=>{
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="" element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Routing;