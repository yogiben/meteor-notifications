Package.describe({
  summary: "Adds notification functionality",
  version: "0.0.2",
  git: "http://github.com/yogiben/meteor-notifications.git"
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
        'iron:router@0.9.3',
        'mrt:moment@2.8.1',
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
