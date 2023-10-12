import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const NewCollectionForm = ({ collections, setCollections }) => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [isOwn, setIsOwn] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const newCollectionHandler = e => {
        e.preventDefault();
        const newCollection = {
            name,
            year,
            isOwn
        }
        axios.post("http://localhost:8000/api/collections", newCollection)
            .then(res => {
                setCollections([...collections, res.data]);
                navigate("/collections");
            })
            .catch(err => {
                console.log(err.response.data);
                const errArray = []
                for (const key of Object.keys(err.response.data.errors)) {
                    errArray.push(err.response.data.errors[key].message)
                }
                setErrors(errArray);
            });
    };

    return (
        <div>
            <div className="header">
                <h1>Add to your Collection</h1>
                <Link to="/">Back</Link>
            </div>
            <div className="container">
                <div className="content">
                    <form className="collection-form" onSubmit={newCollectionHandler}>
                        <div style={{ color: "red" }}>
                            {
                                errors.map((err, idx) => {
                                    return (
                                        <p key={idx}>{err}</p>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <label>Name:</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} />
                            <label>Year:</label>
                            <input type="text" value={year} onChange={e => setYear(e.target.value)} />
                            <label>Own:</label>
                            <input type="checkbox" checked={isOwn} onChange={e => setIsOwn(e.target.checked)} />
                        </div>
                        <button className="button">Create</button>
                    </form>
                </div>
            </div>
        </div>

    );

}

export default NewCollectionForm;