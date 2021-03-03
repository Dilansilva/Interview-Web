import React,{useState} from 'react';
import { Form,
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../components/NavBar'//import Navigation bar component
const Home = () => {

    const [header,setHeader] = useState('');//state for article header
    const [content,setContent] = useState('');//state for article content

    const submitArticle = () => {
        console.log('Hello World');
    }

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
                             <Form.Control 
                                type="text" 
                                placeholder="Add Article header Here"
                                onChange={(e) => {setHeader(e.target.value)}}
                            />
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Add Article Content Here"
                            onChange={(e) => {setContent(e.target.value)}}
                        />
                    </Form.Group>
                </Form>

                    <Button // Submit Button    
                        variant="secondary" 
                        size="lg" block
                        onClick={submitArticle}
                    >
                        Submit Article
                    </Button>
        </div>
    );
}

export default Home;