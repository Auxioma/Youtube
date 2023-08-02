import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/conversation'

import Input from "./Input";
import Message from "./Message";
import Timer from './Timer';

const mapStateToProps = (state) => {
    return state;
};

class Right extends React.Component {
    constructor(props) {
        super(props);
        this.bodyRef = React.createRef();
        this.state = {
            id: null,
            _conversationIndex: -1,
            eventSource: null
        }
    }

    // scroll down to the latest message
    scrollDown() {
        this.bodyRef.current.scrollTop = this.bodyRef.current.scrollHeight;
    }

    componentDidUpdate(prevProps) {
        if (
            this.state._conversationIndex != -1
            && this.props.items[this.state._conversationIndex].messages?.length
            && prevProps.items[this.state._conversationIndex].messages?.length
        ) {
            this.scrollDown();
        }
    }

    componentDidMount() {
        const _t = this;
        const id = this.props.match.params.id;
        const _conversationIndex = this.props.items.findIndex(
            conversation => {
                return conversation.conversationId == this.props.match.params.id
            }
        );
        this.setState({
            _conversationIndex: _conversationIndex
        });
        if (this.props.items[_conversationIndex].messages == undefined) {
            this.props.fetchMessages(id).then(() => {
                this.scrollDown();
                if (this.state.eventSource === null) {
                    let url = new URL(this.props.hubUrl);
                    url.searchParams.append('topic', `/conversations/${this.props.match.params.id}`)
                    this.eventSource = new EventSource(url, {
                        withCredentials: true
                    });
                    this.eventSource.onmessage = function (event) {
                        const data = JSON.parse(event.data);
                        debugger
                        _t.props.postMessage(data, data.conversation.id);
                    }
                }
            });
        } else {
            this.scrollDown();
        }

    }

    componentWillUnmount() {
        if (this.state.eventSource instanceof EventSource) {
            this.state.eventSource.close();
            this.setState({
                eventSource: null
            })
        }
    }


    render() {

        return (
            <div className="chatbox showbox">
                <div className="modal-dialog-scrollable" ref={this.bodyRef}>
                    <div className="modal-content">
                        <div className="msg-head">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <span className="chat-icon">
                                            <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/arroleftt.svg" alt="image title" />

                                        </span>
                                        <div class="flex-shrink-0">
                                            <img class="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h3>Mehedi Hasan</h3>
                                            <p><Timer /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="msg-body">
                                <ul>
                                    {
                                        this.state._conversationIndex != -1
                                            && this.props.items != undefined
                                            && this.props.items[this.state._conversationIndex].messages != undefined
                                            ? this.props.items[this.state._conversationIndex]
                                                .messages.map((message, index) => {
                                                    return (
                                                        <Message message={message} key={index} />
                                                    )
                                                }) : ''
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="send-box">
                            <Input id={this.props.match.params.id} />
                            <div class="send-btns">
                                <div class="attach">
                                    <div class="button-wrapper">
                                        <span class="label">
                                        <img class="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/upload.svg" alt="image title"/> attached file
                                        </span><input type="file" name="upload" id="upload" class="upload-box" placeholder="Upload File" aria-label="Upload File"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, actionCreators)(Right);