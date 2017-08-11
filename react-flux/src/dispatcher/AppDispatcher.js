import {Dispatcher} from 'flux';
import departmentStore from '../stores/DepartmentsStore';
import userStore from '../stores/UserStore';

let dispatcher = new Dispatcher();

dispatcher.register(function(action){
    let {actionType, data} = action;
    switch (actionType){
        case 'GET_ALL_DEPS':
            departmentStore.setData(data);
            departmentStore.emitChange();
            break;
        case 'GET_ALL_USERS':
            userStore.setData(data);
            userStore.emitChange();
            break;
        default:
    }
});

export default dispatcher;