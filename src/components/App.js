import React from 'react';
import { faker } from '@faker-js/faker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faheart } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function getrandomposttime(){
    return (Math.floor(Math.random() * 20) + 1) + 'h';
}

function getrandomlike(){
    return faker.datatype.boolean() ? <FontAwesomeIcon icon={faHeart}/> : <FontAwesomeIcon style={{color:"red"}} icon={faheart}/>
}
const App = (props) => {
    let username = faker.internet.userName()
    let myavatar = faker.internet.avatar()
    let postimage = faker.image.image()
    
    return(
        <div>
            <div className="Post">
                <div className="Post-header">
                    <div className="Post-header-profile-image">
                        <img src={myavatar} alt="Post Profile Image"/>
                    </div>
                    <div className="Post-header-username">
                        {username}
                    </div>
                    <div className="Post-header-more-btn">
                        <FontAwesomeIcon icon={faEllipsisV}/>
                    </div>
                </div>
                <div className="Post-image">
                    <img src={postimage} alt="Post Image"/>
                </div>
                <div className="Post-caption">
                    <span className="Post-caption-username">{username}</span>
                    ui in react is best
                    <div className="Post-caption-time">
                        23h
                    </div>
                </div>
                <div className="Post-comments">
                    <div className="Comment">
                        <div className="Comment-user-profile">
                            <img src={faker.internet.avatar()} alt="User Comment Profile"/>
                        </div>
                        <div className="Comment-comment">
                            <div className="Comment-text">
                                <span className="Post-caption-username">{faker.internet.userName()}</span>
                                {faker.word.adjective()} {faker.lorem.paragraph()}
                            </div>
                            <div className="Comment-detail">
                                <span>{getrandomposttime()}</span>
                                <span>Reply</span>
                            </div>
                        </div>
                        <div className="Comment-like">
                            {getrandomlike()}
                        </div>
                    </div>
                    <div className="Comment">
                        <div className="Comment-user-profile">
                            <img src={faker.internet.avatar()} alt="User Comment Profile"/>
                        </div>
                        <div className="Comment-comment">
                            <div className="Comment-text">
                                <span className="Post-caption-username">{faker.internet.userName()}</span>
                                {faker.word.adjective()} {faker.lorem.words()}
                            </div>
                            <div className="Comment-detail">
                                <span>{getrandomposttime()}</span>
                                <span>Reply</span>
                            </div>
                        </div>
                        <div className="Comment-like">
                            {getrandomlike()}
                        </div>
                    </div>
                    <div className="Comment">
                        <div className="Comment-user-profile">
                            <img src={faker.internet.avatar()} alt="User Comment Profile"/>
                        </div>
                        <div className="Comment-comment">
                            <div className="Comment-text">
                                <span className="Post-caption-username">{faker.internet.userName()}</span>
                                {faker.lorem.words()}
                            </div>
                            <div className="Comment-detail">
                                <span>{getrandomposttime()}</span>
                                <span>Reply</span>
                            </div>
                        </div>
                        <div className="Comment-like">
                            {getrandomlike()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;