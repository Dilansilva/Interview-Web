import React,{useState,useEffect} from 'react';

import { Jumbotron,  //Botstrap
            Button,
        Form } from 'react-bootstrap';

import NavBar from '../components/NavBar';//import Navigation bar

const Update = () => {
    return(
        <div>
            <NavBar/>
                <Jumbotron>
                <Form>{/*User Input for Input article here*/}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>
                            <h1 className="text-center">
                                Edit The Article Here
                            </h1>
                        </Form.Label>

                         <Form.Control //Text input for Add article header
                            type="text" 
                            placeholder="Add Article header Here"
                            //onChange={(e) => {setHeader(e.target.value)}}
                            //defaultValue={}
                        />

                    <Form.Control //Text input for Add article content
                        as="textarea" 
                        rows={3} 
                        placeholder="Add Article Content Here"
                        //onChange={(e) => {setContent(e.target.value)}}
                        //defaultValue={}
                    />

                </Form.Group>

            </Form>

                <Button // Submit Button    
                    variant="success" 
                    size="lg"
                    //onClick={submitArticle}
                    >
            Update
        </Button>

                <Button // Submit Button    
                    variant="danger" 
                    size="lg"
                    //onClick={submitArticle}
                >
            Delete
        </Button>
                </Jumbotron>
        </div>
    );
}

export default Update;