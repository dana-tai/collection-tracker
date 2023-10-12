import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import { Routes, Route, Link } from "react-router-dom";
import NewCollectionForm from '../components/NewCollectionForm';
import axios from "axios";
import Update from "../components/Update";
import '../App.css';
import YourCollection from '../components/YourCollection';


const Home = (props) => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/collections")
            .then(res => setCollections(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='container-nav-links'>
            <div className="navigation-links">
                <Link to="/">Homepage</Link>
                <Link to="/collections/add">Add Collection</Link>
                <Link to="/collections">Your Collection</Link>
            </div>
            <Routes>
                <Route path="/" element={<Dashboard collections={collections} setCollections={setCollections} />} />
                <Route path="/collections" element={<YourCollection collections={collections} setCollections={setCollections} />} />
                <Route path="/collections/add" element={<NewCollectionForm collections={collections} setCollections={setCollections} />} />
                <Route path="/collections/edit/:id" element={<Update />} />
            </Routes>
        </div>

    );
}

export default Home;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Home = (props) => {
//     const [collections, setCollections] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/collections")
//             .then(res => setCollections(res.data))
//             .catch(err => console.log(err));
//     }, [])

//     return (
//         <div>
//             <h1>hellooooo</h1>
//             <div className="navigation-links">
//                 <Link to="/">Homepage</Link>
//                 <Link to="/collection/add">Add Collection</Link>
//                 <Link to="/collection">Your Collection</Link>
//             </div>
//             <Routes>
//                 <Route path="/" element={<Dashboard collections={collections} setCollections={setCollections} />} />
//                 <Route path="/collections/add" element={<NewCollectionForm collections={collections} setCollections={setCollections}/>} />
//                 <Route path="/collections/edit/:id" element={<Update />} />
//             </Routes>
//         </div>
//     )
// }

// export default Home;
