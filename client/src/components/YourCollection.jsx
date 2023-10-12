import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const YourCollection = ({ collections, setCollections }) => {
    
    const deleteCollectionHandler = e => {
        const id = e.target.id;
        axios.delete("http://localhost:8000/api/collections/" + id)
            .then(res => {
                const filteredCollections = collections.filter(collection => collection._id !== id);
                setCollections(filteredCollections);
            })

    }
    return (
        <>
        <div className="header">
            <h1>Your Collection</h1>
            <Link to="/">Back</Link>
        </div>
        <div className="container">
            <table className='table-collection'>
                <thead className='thead'>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Own</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        collections.map(collection => {
                            return (
                                <tr key={collection._id}>
                                    <td>{collection.name}</td>
                                    <td>{collection.year}</td>
                                    <td>{collection.isOwn ? "Yes" : "No"}</td>
                                    <td>
                                        <Link to={`/collections/edit/${collection._id}`}> <button className='button'>Edit</button> </Link>
                                        <button className='button' onClick={deleteCollectionHandler} id={collection._id}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
            
        </>
    );
}

export default YourCollection;