import React from 'react';
import userAction from '../actions/UserAction';
import userStore from '../stores/UserStore';

let UserInfo = React.createClass({
    updateStateFromStore:function(){
        let data = userStore.getData();
        this.setState({data: data});
    },

    getInitialState: function(){
        console.log('UserInfo getInitialState');
        userAction.getAllUsers(1);
        return {};
    },

    componentWillMount: function(){
        console.log('UserInfo componentWillMount');
    },

    componentDidMount:function(){
        console.log('UserInfo componentDidMount');
        userStore.addChangeListener(this.updateStateFromStore)
    },

    componentWillReceiveProps:function(nextProps){
        console.log('UserInfo componentWillReceiveProps');

    },

    shouldComponentUpdate:function(nextProps, nextState){
        console.log('UserInfo shouldComponentUpdate');
        return true;
    },

    componentWillUpdate: function(){
        console.log('UserInfo componentWillUpdate');

    },

    componentDidUpdate: function(){
        console.log('UserInfo componentDidUpdate');

    },

    componentWillUnmount: function(){
        userStore.removeChangeListener();
    },

    render: function(){
        console.log('UserInfo render1');
        let data = this.state.data;
        if(!data){
            return <div />
        }
        return (
           <div>
               <p>部门人数列表：</p>
               <table className='table table-bordered'>
                   <thead>
                   <tr>
                       <th>#</th>
                       <th>用户名</th>
                       <th>邮箱</th>
                       <th>地址</th>
                   </tr>
                   </thead>
                   <tbody>
                   {
                       data.map((item) => {
                          return (
                              <tr key={item.userId}>
                                  <td>{item.userId}</td>
                                  <td>{item.username}</td>
                                  <td>{item.email}</td>
                                  <td>{item.address}</td>
                              </tr>
                          )

                       })
                   }
                   </tbody>
               </table>
           </div>
       )
   }
});

export default UserInfo;