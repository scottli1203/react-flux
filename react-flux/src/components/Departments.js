import React from 'react';
import departmentAction from '../actions/DepartmentsAction';
import departmentStore from '../stores/DepartmentsStore';
import userAction from '../actions/UserAction';

let Departments = React.createClass({
    updateStateFromStore:function(){
        let data = departmentStore.getData();
        this.setState({data:data});
    },

    getDepUsers:function(depId){
        userAction.getAllUsers(depId);
    },

    getDefaultProps: function(){
        console.log('Departments getDefaultProps');
    },

    getInitialState: function(){
        console.log('Departments getInitialState');
        departmentAction.getAllDeps();
        return {};
    },

    componentWillMount: function(){
        console.log('Departments componentWillMount');
    },

    componentDidMount: function(){
        departmentStore.addChangeListener(this.updateStateFromStore);
    },

    componentWillReceiveProps:function(nextProps){
        console.log('Departments componentWillReceiveProps');
    },

    shouldComponentUpdate:function(nextProps, nextState){
        console.log('Departments shouldComponentUpdate');
        return true;
    },

    componentWillUpdate:function(){
        console.log('Departments componentWillUpdate');
    },

    componentDidUpdate:function(){
        console.log('Departments componentDidMount');
    },

    componentWillUnmount: function(){
        departmentStore.removeChangeListener();
    },

    render:function(){
        console.log('Departments render');
        let data = this.state.data;
        if(!data){
            return <div/>
        }
        return (
            <div>
                <span>选择部门：</span>
                <select className="form-control" onChange={(e) => this.getDepUsers(e.target.value)}>
                    {
                        data.map((item) => {
                            let {depId, depName} = item;
                            return <option value={depId} key={depId}>{depName}</option>
                        })

                    }
                </select>
            </div>

        );
   }
});

export default Departments;