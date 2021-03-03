import React from 'react';
import { Jumbotron,
        Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayArticle = (props) => {
    return(
        <Jumbotron>
            <Container>
                <p>{props.article}</p>
            </Container>
        </Jumbotron>
    );
}

export default DisplayArticle;