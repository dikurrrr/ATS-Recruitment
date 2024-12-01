// jest.config.js
module.exports = {
  // Other Jest configuration options...
  reporters: [
    'default',
    [ 'jest-html-reporters', {
      publicPath: './html-report',
      filename: 'report.html',
      expand: true
    }]
  ],
};
