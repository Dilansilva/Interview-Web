import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';//iMPort home/add page
import Edit from './pages/Edit';//import Edit page
const App = () => {
  return(
    <div>
      
          <Edit/>
    </div>
  );
}

export default App;
