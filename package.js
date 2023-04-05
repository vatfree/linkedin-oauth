Package.describe({
  name: 'vatfree:linkedin-oauth',
  version: '5.0.1',
  summary: 'LinkedIn OAuth flow, use with Meteor 2.3 & up',
  git: 'https://github.com/vatfree/linkedin-oauth',
  documentation: 'README.md'
});

Package.onUse(api => {
  api.versionsFrom('2.3');
  api.use('ecmascript');
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('linkedin-client.js', 'client');
  api.addFiles('linkedin-server.js', 'server');

  api.export('Linkedin');
});

