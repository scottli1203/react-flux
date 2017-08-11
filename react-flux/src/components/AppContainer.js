import React from 'react';
import ReactDOM from 'react-dom';
import Departments from './Departments';
import UserInfo from './Users';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

let AppContainer = React.createClass({
    getDefaultProps: function(){
        console.log('AppContainer getDefaultProps');
    },

    getInitialState: function(){
        console.log('AppContainer getInitialState');
        return {}
    },

    componentWillMount: function(){
        console.log('AppContainer componentWillMount');

    },

    componentDidMount: function(){
        console.log('AppContainer componentDidMount');

    },

    componentWillReceiveProps:function(nextProps){
        console.log('AppContainer componentWillReceiveProps');

    },

    shouldComponentUpdate:function(nextProps, nextState){
        console.log('AppContainer shouldComponentUpdate');

    },

    componentWillUpdate: function(){
        console.log('AppContainer componentWillUpdate');

    },

    componentDidUpdate: function(){
        console.log('AppContainer componentDidUpdate');

    },

    componentWillUnmount: function(){
        console.log('AppContainer componentWillUnmount');

    },

    render:function(){
        console.log('AppContainer render');
        return (
            <div className="container-main">
                <Departments/>
                <UserInfo/>
            </div>
        )
    }

});


let root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<AppContainer />,root);
