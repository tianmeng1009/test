var request = require('request');

request('http://wx.china.cn/front/live/data/live_5361_desc.js', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
});