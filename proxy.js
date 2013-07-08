if (process.argv.length != 4) {
  console.log('Usage: node proxy.js PORT RIAK_HOST:RIAK_PORT');
  process.exit(1);
}

var port = parseInt(process.argv[2]);
var riak_server = {
  host: process.argv[3].split(':')[0],
  port: parseInt(process.argv[3].split(':')[1])
};

var http = require('http'),
  static = require('node-static'),
  httpProxy = require('http-proxy');

var fileServer = new static.Server('./');
var proxy = new httpProxy.RoutingProxy();

http.createServer(function(req, res) {
  if (req.url.lastIndexOf('/search/', 0) == 0) {
    proxy.proxyRequest(req, res, riak_server);
  } else if (req.url.lastIndexOf('/buckets/', 0) == 0) {
    proxy.proxyRequest(req, res, riak_server);
  } else {
    req.addListener('end', function() {
      fileServer.serve(req, res);
    }).resume();
  }
}).listen(port);
