var repo = function () {
    var called = 0;
    
    var save = function(task){
        called++;
        console.log('saving ' +task+ 'counter ' +called);
    }
    console.log('newign up task on Repo');
    return {
        save: save
    }
}

//module.exports = new  repo;
module.exports = repo();