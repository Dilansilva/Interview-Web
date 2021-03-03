import React,{Component} from 'react';
import { Form } from 'react-bootstrap';
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
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
        </div>
    );
}

export default Home;