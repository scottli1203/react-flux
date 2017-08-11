import dispatch from '../dispatcher/AppDispatcher';
import fetch from 'isomorphic-fetch';

const host = 'http://localhost:3000/api/v1';

let DepartmentsAction = {
    getAllDeps:function(){
        fetch(host + "/departments", {
            method: "GET"
        }).then(response => response.json())
            .then(json => {
                //Dispatch action.
                dispatch.dispatch({
                    actionType:'GET_ALL_DEPS',
                    data:json.departments
                });
            });


    },
    add:function(){
        console.log('Add method');
    },
    deleteMethod:function(){
      console.log('Delete Mthod');
      for(let i=0; i< 10; i++){
          console.log(i);
      }
    }
};

export default DepartmentsAction;