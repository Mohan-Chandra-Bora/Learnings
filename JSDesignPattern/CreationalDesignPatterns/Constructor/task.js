var task = {
    title : 'My Title',
    description : "My Description"
    
}
Object.defineProperty(task, 'toString', {
    value: function(){
        return this.title + ' ' + this.description;    
    },
    enumerable: false,
    writable: false,
    configurable: false
})

var urgentTast = Object.create(task);
Object.defineProperty(urgentTast, 'toString', {
    value: function(){
        return this.title + ' is urgent task ';    
    },
    enumerable: true,
    writable: true,
    configurable: true
})


console.log(urgentTast.toString());