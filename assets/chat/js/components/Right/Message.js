import React from 'react';

class Message extends React.Component {

    componentDidMount() {}

    render() {
        return (

            <li className={`${this.props.message.mine ? `sender` : `repaly`}`} >
                <p>{this.props.message.content}</p>
                <span className="time">{new Date(this.props.message.CreatedAt).toLocaleString()}</span>
            </li>

        );
    }
}

export default Message;