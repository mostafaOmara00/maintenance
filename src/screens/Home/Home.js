import React from 'react';
import './Home.css';
import Navbar from "../../components/Navbar/Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";

const Home = () => {
    return (
        <div className={'Home'}>
            <Navbar/>
            <Jumbotron />
        </div>
    );
};

export default Home;