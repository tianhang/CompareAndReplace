var fs = require("fs");
var path = require("path");

var child_process = require('child_process');


var dirPathOld = "./data/old";
var dirPathNew = "./data/new";
fs.readdir(dirPathNew, function(err, files) {
    if (!err) {
        files.forEach(function(fileName) {
            var filepath = path.resolve(dirPathNew, fileName);
            readNewMsgFile(filepath);
        });
    }
})

function readNewMsgFile(filepath) {
    fs.readFile(filepath, function(err, data) {
        if (err) {
            return console.error(err);
        }
        
    });
    console.log(filepath);
    child_process.execFile(filepath, function(err, stdout, stderr) {
        if (error) {
            console.error('stderr', stderr);
            throw error;
        }
        console.log(stdout);
    });
}


// 异步读取
// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("异步读取: " + data.toString());
// });

// 同步读取
// var data = fs.readFileSync('input.txt');
// console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");