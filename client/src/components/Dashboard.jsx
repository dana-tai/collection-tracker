import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = ({ collections, setCollections }) => {
    
    return (
        <>
            <div className="titlepage">
                <h1>Welcome!</h1>
                <p>Manage and keep track of your collection!</p>
            </div>
            <div className="container">
                <div className="content">
                    <h2>Your Collection</h2>
                    <table className='table-collection'>
                        <thead className='thead'>
                            <tr>
                                <th>Name</th>
                                <th>Year</th>
                                <th>Own</th>
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
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
            
        </>
    );
}

export default Dashboard;