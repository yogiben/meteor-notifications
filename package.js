Package.describe({
  summary: "My updated version if yogiben's notification. Updated for Meteor 1.2.",
  version: "0.1.0",
  git: "http://github.com/patrickbolle/meteor-notifications.git"
});

both = ['client', 'server'];

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2.1');

  api.use(
      [
        'coffeescript',
        'templating',
        'less',
        'tracker',
        'mrt:moment@2.8.1',
        'aldeed:autoform@5.8.1'
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
