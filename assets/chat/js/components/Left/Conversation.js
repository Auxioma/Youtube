import React from 'react';
import {Link} from "react-router-dom";


class Conversation extends React.Component {
    render() {
        return (
            <Link to={"/conversation/" + this.props.conversation.conversationId} className="d-flex align-items-center">
                
                <div className="flex-shrink-0">
                <img src={`/assets/img/profile/${this.props.conversation.imageName}`} alt="" height="45" width="45" className="img-fluid rounded-circle" />
                    <span className="active"></span>
                </div>

                <div className="flex-grow-1 ms-3">
                    <h3>{this.props.conversation.Pseudo}</h3>
                    <p>{this.props.conversation.content}</p>
                </div>
                
            </Link>
        );
    }
}

export default Conversation;