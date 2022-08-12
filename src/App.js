import React from 'react';
import './App.css';
import MyGif from './my.gif';
function App() {

    let mynumber = Math.floor(Math.random() * 10) + 1;
    let myGifContainer = undefined;

    return(
        <div>
            <h1>React Conditional Rendering</h1>
            <h4>Number:{mynumber}</h4>
            {mynumber === 7 ?
                <img id="gif" src={MyGif} alt="My Gif"/>
                : ''
            }
        </div>
    )

}

export default App;
