Package.describe({
  summary: "Adds notification functionality",
  version: "0.0.6",
  git: "http://github.com/yogiben/meteor-notifications.git"
});

both = ['client', 'server'];

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  
  api.use(
      [
        'coffeescript',
        'templating',
        'less',
        'tracker',
        'iron:router@1.0.0',
        'mrt:moment@2.8.1',
        'aldeed:autoform@5.1.0'
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
