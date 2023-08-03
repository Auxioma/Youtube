import React from 'react';
import timer from './Timer';

class Message extends React.Component {

    componentDidMount() {}

    render() {
        let img = ``;
        if (!this.props.message.mine) {
            img = <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />;
        }
        return (

            <li className={`${this.props.message.mine ? `sender` : `repaly`}`} >
                <p>{this.props.message.content}</p>
                <span className="time">{new Date(this.props.message.CreatedAt).toLocaleString()}</span>
            </li>

        );
    }
}

export default Message;