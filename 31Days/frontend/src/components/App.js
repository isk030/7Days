import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import Header from "./layout/Header";
import Dashboard from "./posts/Dashboard";
import {Provider} from 'react-redux';
import store from "../store";

//alert Options
const alertOptions = {
    timeout: 3000,
    position: "top center"
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                    <Fragment>
                        <Header/>
                        <div className="container px-5 mx">
                            <Dashboard/>
                        </div>
                    </Fragment>
            </Provider>

        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));