let config = {};

/**
 * Localhost web server configurations
 */

 config.web = {};
 config.web.port = process.env.PORT || '3000';
 config.web.secret = 'topsecret';

 /**
  * Database configurations
  */

  config.database = {};
  config.database.username = 'admin';
  config.database.password = 'admin';
  config.database.url = 'cluster0-ezohj.mongodb.net';
  config.database.name = 'nodequiz';

  module.exports = config;
