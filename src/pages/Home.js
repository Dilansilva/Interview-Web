import React,{useState} from 'react';

import { Form,  //Botstrap
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../components/NavBar'//import Navigation bar component

import firebaseDb from '../firebase';//import some firbase things

const Home = () => {

    const [header,setHeader] = useState('');//state for article header
    const [content,setContent] = useState('');//state for article content

    const [error,setError] = useState('');//state for error handling

    const submitArticle = () => {//when the button is clicked
        
        firebaseDb.child('articles').push(
            {head : header,content : content},//push the data to database
            err => {
                if(err)//error handling
                    setError('Error');
            }
        )
    }

    return(
        <div>
            <NavBar/>{/*Navigation bar */}

                <Form>{/*User Input for Input article here*/}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>
                                <h1 className="text-center">
                                    Add Your Article Here
                                </h1>
                            </Form.Label>

                             <Form.Control //Text input for Add article header
                                type="text" 
                                placeholder="Add Article header Here"
                                onChange={(e) => {setHeader(e.target.value)}}
                            />

                        <Form.Control //Text input for Add article content
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

                        {error ?  <small>Database Error</small> : null}{/*Error message display */}
        </div>
    );
}

export default Home;