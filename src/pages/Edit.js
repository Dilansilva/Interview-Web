import React from 'react';
import { Form,
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Article from "../components/Article";
import NavBar from '../components/NavBar'

const Edit = () => {
    return(
        <div>
            <NavBar/>{/*Navigation bar */}
                <Article
                    article="Sample Article 01"
                />
        </div>
    );
}

export default Edit;