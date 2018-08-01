var routes = function(app, request) {  
  
    app.options('/*', function(req, res) {
      res.status(200);
      res.send({});
    });
  
    app.get('/*', function(req, res) {

      var esc = encodeURIComponent
      var query = Object.keys(req.query)
                        .map(k => esc(k) + '=' + esc(req.query[k]))
                        .join('&')

      var options = {
        method: 'GET',
        url: process.env.SERVICES_LIVECHAT_API_URL + req.path + (query ? '?' : '') + query,
        headers: {
          'Authorization': req.header('Authorization'),
          'X-API-Version': req.header('X-API-Version') ? req.header('X-API-Version') : 2,
          'X-Application': 'Proxy-Powered-By-LiveChat-L2-Team'
        }
      };

      request(options, function (error, response, body) {
        res.status(response.statusCode);
        res.set('Content-Type', response.headers['content-type']);
        res.send(error ? error : body);
      });
    });
    
    app.post('/*', function(req, res) {

      var query = Object.keys(req.query)
                        .map(k => esc(k) + '=' + esc(req.query[k]))
                        .join('&')
  
      var options = {
        method: 'POST',
        url: process.env.SERVICES_LIVECHAT_API_URL + req.path + (query ? '?' : '') + query,
        headers: {
          'Authorization': req.header('Authorization'),
          'X-API-Version': req.header('X-API-Version') ? req.header('X-API-Version') : 2,
          'X-Application': 'Proxy-Powered-By-LiveChat-L2-Team'
        }
      };

      if (req.header('content-type') == 'application/json' )
      {
        options.json = true;
        options.body = req.body;
      }
      else if (req.header('content-type') == 'application/x-www-form-urlencoded')
      {
        options.headers['content-type'] = 'application/x-www-form-urlencoded';
        options.form = req.body;
      }
      else
      {
        res.status(400);
        res.set('Content-Type', 'application/json');
        res.send({error: 'bad request'});
        return;
      }

      request(options, function (error, response, body) {
        res.status(response.statusCode);
        res.set('Content-Type', response.headers['content-type']);
        res.send(error ? error : body);
      });

    });
  

    app.put('/*', function(req, res) {

      var query = Object.keys(req.query)
                        .map(k => esc(k) + '=' + esc(req.query[k]))
                        .join('&')
  
      var options = {
        method: 'PUT',
        url: process.env.SERVICES_LIVECHAT_API_URL + req.path + (query ? '?' : '') + query,
        headers: {
          'Authorization': req.header('Authorization'),
          'X-API-Version': req.header('X-API-Version') ? req.header('X-API-Version') : 2,
          'X-Application': 'Proxy-Powered-By-LiveChat-L2-Team'
        }
      };

      if (req.header('content-type') == 'application/json' )
      {
        options.json = true;
        options.body = req.body;
      }
      else if (req.header('content-type') == 'application/x-www-form-urlencoded')
      {
        options.headers['content-type'] = 'application/x-www-form-urlencoded';
        options.form = req.body;
      }
      else
      {
        res.status(400);
        res.set('Content-Type', 'application/json');
        res.send({error: 'bad request'});
        return;
      }

      request(options, function (error, response, body) {
        res.status(response.statusCode);
        res.set('Content-Type', response.headers['content-type']);
        res.send(error ? error : body);
      });

    });

    app.delete('/*', function(req, res) {

      var esc = encodeURIComponent
      var query = Object.keys(req.query)
                        .map(k => esc(k) + '=' + esc(req.query[k]))
                        .join('&')

      var options = {
        method: 'DELETE',
        url: process.env.SERVICES_LIVECHAT_API_URL + req.path + (query ? '?' : '') + query,
        headers: {
          'Authorization': req.header('Authorization'),
          'X-API-Version': req.header('X-API-Version') ? req.header('X-API-Version') : 2,
          'X-Application': 'Proxy-Powered-By-LiveChat-L2-Team'
        }
      };

      request(options, function (error, response, body) {
        res.status(response.statusCode);
        res.set('Content-Type', response.headers['content-type']);
        res.send(error ? error : body);
      });
    });
    
  };
   
  module.exports = routes;