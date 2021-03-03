import React,{useState,useEffect} from 'react';

import {Jumbotron,  //Botstrap
        Button,
        Form } from 'react-bootstrap';

import NavBar from '../components/NavBar';//import Navigation bar

import firebaseDb from '../firebase';//import some firbase things

const Update = () => {

    const [content, setContent] = useState('');//state for article content
    const [header, setHeader] = useState('');//state for article header

    const [previousContent,setPreviousContent] = useState('');//state for previous content
    const [previousHeader, setPreviousHeader] = useState('');//state for previous header

    useEffect(() => {//function for retrieve data from fire store
        firebaseDb.child('articles').on('value',snapshot=> {
            if(snapshot.val() != null){ //if this is not null
                setPreviousContent(snapshot.val().content);//set previous values
                setPreviousHeader(snapshot.val().head);
            }
        })
    },[]);

    const onClickUpdate = () => {//function for update article
        // firebaseDb.child(`articles/${curentID}`).set(
        //     {head : header,content : content},                       //
        //         err => {                                             // This is the logic                
        //             if(err){                                         // behind the update
        //                 console.log('Error in update function');     //    
        //             }
        //         }
        // )
    }

    const onClickDelete = () => {//function for delete article
        // firebaseDb.child(`articles/${curentID}`).remove(             //
        //     err => {                                                 //This is the logic 
        //         if(err)                                              //behind the delete
        //             console.log('Error in Delete function');         //
        //     }
        // )
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
                            onChange={(e) => {setHeader(e.target.value)}}
                            defaultValue={previousHeader}
                        />

                    <Form.Control //Text input for Add article content
                        as="textarea" 
                        rows={3} 
                        placeholder="Add Article Content Here"
                        onChange={(e) => {setContent(e.target.value)}}
                        defaultValue={previousContent}
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