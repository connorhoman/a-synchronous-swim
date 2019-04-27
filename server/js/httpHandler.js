const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue')

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  
  if (req.method === 'GET') {
    var message = messageQueue.dequeue();
    res.writeHead(200, headers);
    res.end(message);

    console.log('Serving request type ' + req.method + ' for url ' + req.url);
  }
  if (req.method === 'POST') {

    
  }
  
};
