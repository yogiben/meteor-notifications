Package.describe({
  summary: "Adds notification functionality",
  version: "0.0.1",
  git: " \* Fill me in! *\ "
});

both = ['client', 'server'];

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  
  api.use(
      [
        'coffeescript',
        'templating',
        'less',
        'tracker',
        'iron:router',
        'mrt:moment',
        'aldeed:collection2@0.4.6'
      ],
      both);

  api.addFiles(
      [
        'lib/both/schemas.coffee',
        'lib/both/collections.coffee',
        'lib/both/router.coffee'
      ],
      both);

  api.addFiles(
      [
        'lib/client/templates.html',
        'lib/client/templates.coffee',
        'lib/client/helpers.coffee',
        'lib/client/tracker.coffee',
        'lib/client/style.less'
      ],
      'client');

  api.addFiles(
      [
        'lib/server/allow.coffee',
        'lib/server/publish.coffee',
        'lib/server/methods.coffee'
      ],
      'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('notifications');
  api.addFiles('notifications-tests.js');
});
