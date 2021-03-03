import React,{useState,useEffect} from 'react';

import NavBar from '../components/NavBar';//import Navigation bar
import DisplayArticle from '../components/DisplayArticle';//import Display Article

import firebaseDb from '../firebase';//import some firbase things

const Display = (props) => {

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
            <NavBar/>
                {
                    Object.keys(article).map(data => {
                        return <DisplayArticle
                            articleHeader={article[data].head}
                            articleContent={article[data].content}
                        />
                    })
                }
        </div>
    );
}

export default Display; 