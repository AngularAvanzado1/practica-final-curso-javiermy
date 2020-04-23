module.exports = {
  name: 'worldb',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/worldb',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
