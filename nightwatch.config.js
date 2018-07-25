require('babel-register');
require('nightwatch-cucumber')({
  cucumberArgs: [
    '--format', 'snippets:tests/e2e/features/undefined-steps.js',
    '--format-options', '{"snippetInterface": "async-await"}',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:tests/e2e/reports/cucumber.json',
    '--require', 'tests/e2e/step-definitions',
    '--require', 'tests/e2e/hooks.js',
    'tests/e2e/features',
  ]
});

const config = require('@vue/cli-plugin-e2e-nightwatch/nightwatch.config.js');
// Change default options here
config.page_objects_path = ['tests/e2e/pages'];
delete config.src_folders;

module.exports = config;