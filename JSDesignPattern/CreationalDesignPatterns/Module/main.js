var Task = require('./task');
var Repo = require('./taskrepository');

var task1 =  new Task(Repo.get(1));

var task2 =  new Task({name: 'modular'});
var task3 =  new Task({name:"singletons"});
var task4 =  new Task({name:"prototype"});

task1.complete();
task2.save();
task3.save();
task4.complete();