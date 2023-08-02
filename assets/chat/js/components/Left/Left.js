import React from 'react';
import Conversation from "./Conversation";
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/conversation'

const mapStateToProps = (state) => {
    return state;
};

class Left extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const _t = this;
        this.props.fetchConversations()
            .then(() => {

                let url = new URL(this.props.hubUrl);
                url.searchParams.append('topic', `/conversations/${this.props.username}`);

                const eventSource = new EventSource(url, {
                    withCredentials: true
                });

                eventSource.onmessage = function (event) {
                    debugger
                    const data = JSON.parse(event.data);
                    _t.props.setLastMessage(data, data.conversation.id);
                }
            });
    }

    render() {
        return (
            <div className="chatlist">
                <div className="bg-white">
                    <div className="modal-dialog-scrollable">
                        <div className="modal-content">
                        <div className="chat-header">
                  <div className="msg-search">
                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search" aria-label="search"/>
                    <a className="add" href="#"><img class="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/add.svg" alt="add"/></a>
                  </div>

                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="Open-tab" data-bs-toggle="tab" data-bs-target="#Open" type="button" role="tab" aria-controls="Open" aria-selected="true">Open</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="Closed-tab" data-bs-toggle="tab" data-bs-target="#Closed" type="button" role="tab" aria-controls="Closed" aria-selected="false">Closed</button>
                    </li>
                  </ul>
                </div>
                            <div className="modal-body">
                                <div className="chat-lists">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="Open-tab">
                                            <div className="chat-list">
                                                {
                                                    this.props.items != undefined ?

                                                        this.props.items
                                                            .sort((a, b) => {
                                                                return a.createdAt < b.createdAt;
                                                            })
                                                            .map((conversation, index) => {
                                                                return (
                                                                    <Conversation conversation={conversation} key={index} />
                                                                )
                                                            })
                                                        : ''
                                                }
                                            </div>
                                        </div>
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

                export default connect(mapStateToProps, actionCreators)(Left);