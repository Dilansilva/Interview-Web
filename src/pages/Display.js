import React from 'react';
import NavBar from '../components/NavBar';//import Navigation bar
import DisplayArticle from '../components/DisplayArticle';//import Display Article

const Display = (props) => {
    return(
        <div>
            <NavBar/>
                <DisplayArticle
                    article="This is an article"
                />
        </div>
    );
}

export default Display; 