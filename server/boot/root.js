// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-mixins
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};
