import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Left from "./Left/Left";
import Right from "./Right/Right";
import Blank from "./Right/Blank";

class App extends React.Component {

    render() {
        return (
            <section className="message-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="chat-area">
                                <Left/>
                                <Switch>
                                    <Route path="/" component={Blank} exact />
                                    <Route path="/conversation/:id"
                                        render={props => <Right {...props} key={props.match.params.id}></Right> }
                                    />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;