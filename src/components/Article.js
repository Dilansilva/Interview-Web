import React from 'react';

import {Row,
        Button,
        Container,
        Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useHistory} from 'react-router-dom';//React Navigation

const Article = (props) => {

    const onClickHandler = (e) => {
        e.preventDefault();
        History.push('/update');
    }

    return(
        <div style={{padding : '10px'}}>
            <Container>
                <Row>
                    <Col sm={8}>
                        <h2>{props.articleHeader}</h2>{/*Article Header props */}
                            <p>{props.articleContent}</p>{/*Prop for Article content */}
                    </Col>

                    <Col sm={4}>
                        <Button 
                            variant="outline-danger"
                            onClick={(e) => {onClickHandler(e)}}
                        >
                            Edit the contetnt
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Article;