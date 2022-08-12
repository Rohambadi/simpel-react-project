import React from 'react';
import './App.css';
import MyGif from './my.gif';
function App() {

    let mynumber = Math.floor(Math.random()*10)+1;
    if(mynumber===7){

        return(
            <div>
                <h1>React Conditional Rendering</h1>
                <h4>Number:{mynumber}</h4>
                <img id='gif' src={MyGif} alt="MY Gif" />
            </div>
        )


    }else{
        return(
            <div>
                <h1>React Conditional Rendering</h1>
                <h4>Number:{mynumber}</h4>
            </div>
        )
    }


}

export default App;
