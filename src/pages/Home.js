import React,{Component} from 'react';
import { Form,
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../components/NavBar'//import Navigation bar component
const Home = () => {
    return(
        <div>
            <NavBar/>{/*Navigation bar */}

                <Form>{/*User Input for Input article here*/}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>
                                <h1>
                                    Add Your Article Here
                                </h1>
                            </Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Add your Article Here"/>
                    </Form.Group>
                </Form>

                    <Button variant="secondary" size="lg" block>
                        Submit Article
                    </Button>
        </div>
    );
}

export default Home;