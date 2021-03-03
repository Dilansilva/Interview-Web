import React,{useEffect,useState} from 'react';

import { Form,
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Article from "../components/Article";//Article component
import NavBar from '../components/NavBar'//Navigation bar component

import firebaseDb from '../firebase';//import some firbase things

const Edit = () => {

    const [article, setArticle] = useState({});//store retrieved data

    useEffect(() => {//fetch data from fireStore
        firebaseDb.child('articles').on('value',snapshot=> {
            if(snapshot.val() != null){ //if this is not null
                setArticle({
                    ...snapshot.val()
                })
            }
        })
    },[]);

    return(
        <div>
            <NavBar/>{/*Navigation bar */}
                {
                    Object.keys(article).map(data => {
                        return <Article
                            articleHeader={article[data].head}
                            articleContent={article[data].content}
                        />
                    })
                }
        </div>
    );
}

export default Edit;