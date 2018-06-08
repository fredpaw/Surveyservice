var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'fredpaw123456' }, function(err, tunnel) {
  if(err) {
    console.log(err);
  }

  console.log(tunnel.url)
});