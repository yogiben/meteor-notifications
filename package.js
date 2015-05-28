Package.describe({
  summary: "Adds notification functionality",
  version: "0.1.0",
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
        'mrt:moment@2.8.1',
        'aldeed:autoform@4.2.2 || 5.1.2'
      ],
      both);

  api.addFiles(
      [
        'lib/both/schemas.coffee',
        'lib/both/collections.coffee'
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
