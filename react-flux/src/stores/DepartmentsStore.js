let EventEmitter = require('events').EventEmitter;

let depStore = Object.assign({}, EventEmitter.prototype,{
    data:{},
    setData: function(data){
        this.data = data;
    },
    getData: function(){
        return this.data;
    },
    emitChange: function(){
        this.emit('change');
    },
    addChangeListener: function(callback){
        this.on('change',callback);
    },
    removeChangeListener:function(callback){
        this.removeListener('change',callback);
    }
});

export default depStore;