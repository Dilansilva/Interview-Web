import React from 'react';
import {Row,
        Button,
        Container,
        Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = (props) => {
    return(
        <div style={{padding : '10px'}}>
            <Container>
                <Row>
                    <Col sm={8}>
                        {props.article}
                    </Col>

                    <Col sm={4}>
                        <Button variant="outline-danger">
                            Edit the contetnt
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Article;