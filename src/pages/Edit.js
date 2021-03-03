import React from 'react';
import { Form,
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Article from "../components/Article";

const Edit = () => {
    return(
        <div style={{padding: 10}}>
            <Article
                article="Sample Article 01"
            />
            <Article
                article="Sample Article 02"
            />
        </div>
    );
}

export default Edit;