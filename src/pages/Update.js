import React,{useState,useEffect} from 'react';

import {Jumbotron,  //Botstrap
        Button,
        Form } from 'react-bootstrap';

import NavBar from '../components/NavBar';//import Navigation bar

const Update = () => {

    const [content, setContent] = useState('');//state for article content
    const [header, setheader] = useState('');//state for article header

    const [previousContent,setPreviousContent] = useState('');//state for previous content
    const [previousHeader, setPreviousHeader] = useState('');//state for previous header

    useEffect(() => {

    },[]);

    const onClickUpdate = () => {
        console.log('For Update Function');
    }

    const onClickDelete = () => {
        console.log('For Delete Function');
    }

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
                            defaultValue={header}
                        />

                    <Form.Control //Text input for Add article content
                        as="textarea" 
                        rows={3} 
                        placeholder="Add Article Content Here"
                        //onChange={(e) => {setContent(e.target.value)}}
                        defaultValue={content}
                    />

                </Form.Group>

            </Form>

                <Button // Submit Button    
                    variant="success" 
                    size="lg"
                    onClick={onClickUpdate}
                    >
            Update
        </Button>

                <Button // Submit Button    
                    variant="danger" 
                    size="lg"
                    onClick={onClickDelete}
                >
            Delete
        </Button>
                </Jumbotron>
        </div>
    );
}

export default Update;