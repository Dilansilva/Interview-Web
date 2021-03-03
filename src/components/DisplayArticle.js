import React from 'react';

import { Jumbotron,
        Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayArticle = (props) => {
    return(
        <Jumbotron>
            <Container>
                <h2>{props.articleHeader}</h2>
                    <p>{props.articleContent}</p>
            </Container>
        </Jumbotron>
    );
}

export default DisplayArticle;