var http = require('http');
var request = require('request');

http.createServer(function (req, res){

  request('http://wx.china.cn/front/live/data/live_5361_desc.js', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.

    res.end(body.substr(0,500));
   }
  });

}).listen(8000,"127.0.0.1");

console.log("Server running at http://127.0.0.1:8000/");