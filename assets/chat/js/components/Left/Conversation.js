import React from 'react';
import {Link} from "react-router-dom";


class Conversation extends React.Component {
    render() {
        return (
            <Link to={"/conversation/" + this.props.conversation.conversationId} className="d-flex align-items-center">
                
                <div className="flex-shrink-0">
                    <img src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user" className="img-fluid"/>
                    <span className="active"></span>
                </div>

                <div className="flex-grow-1 ms-3">
                    <h3>{this.props.conversation.username}</h3>
                    <p>{this.props.conversation.content}</p>
                </div>
                
            </Link>
        );
    }
}

export default Conversation;