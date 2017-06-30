var Task = require('./constructor');

var task1 =  new Task("constructore");
var task2 =  new Task("modular");
var task3 =  new Task("singletons");
var task4 =  new Task("prototype");

task1.complete();
task2.save();
task3.save();
task4.complete();