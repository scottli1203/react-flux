import dispatch from '../dispatcher/AppDispatcher';
import fetch from 'isomorphic-fetch';

const host = 'http://localhost:3000/api/v1';

let UserAction = {
    getAllUsers:function(departmentId){
        var link = host + "/departments/"+departmentId + "/users";
        fetch(link, {
            method: "GET"
        }).then(response => response.json())
            .then(json => {
                //Dispatch action.
                dispatch.dispatch({
                    actionType:'GET_ALL_USERS',
                    data:json.users
                });
            });


    },
    updateUserById:function(){
        console.log('updateUserById');
    },
    getUserById:function(){
        console.log('getUserById');
    }
};

export default UserAction;