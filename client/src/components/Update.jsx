import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [isOwn, setIsOwn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/collections/" + id)
            .then(res => {
                setName(res.data.name);
                setYear(res.data.year);
                setIsOwn(res.data.isOwn);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const updateCollection = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/collections/" + id, {
            name,
            year,
            isOwn
        })
            .then(res => {
                console.log(res);
                navigate("/collections");
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <div className="header">
                <h1>Edit your Collection</h1>
                <Link to="/collections">Back</Link>
            </div>
            <div className="container">
                <form className="collection-form" onSubmit={updateCollection}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    <label>Year:</label>
                    <input type="text" value={year} onChange={e => setYear(e.target.value)} />
                    <label>Own:</label>
                    <input type="checkbox" checked={isOwn} onChange={e => setIsOwn(e.target.checked)} />
                    <button className="button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Update;