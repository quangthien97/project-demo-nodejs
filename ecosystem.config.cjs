module.exports = {
  apps: [
    {
      'name': 'advocate-api',
      'script': 'index.js',
      'node_args': '--experimental-json-modules',
      'args': '--api',
      'exec_mode': 'cluster_mode',
      'instances': '1',
      'watch': false
    }
  ]
};
