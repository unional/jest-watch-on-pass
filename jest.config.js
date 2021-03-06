const common = require('@unional/devpkg-node/simple/config/jest.common')
module.exports = Object.assign(common, {
  'watchPlugins': [
    'jest-watch-suspend',
    [
      'jest-watch-toggle-config',
      {
        'setting': 'verbose'
      }
    ],
    [
      'jest-watch-toggle-config',
      {
        'setting': 'collectCoverage'
      }
    ]
  ]
})
