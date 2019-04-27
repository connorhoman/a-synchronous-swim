const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  if (req.method === 'GET') {
    res.write('up'); 
  }
  if (req.method === 'POST') {

    
  }
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  res.end();
};
