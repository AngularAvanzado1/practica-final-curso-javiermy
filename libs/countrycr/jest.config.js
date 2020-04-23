module.exports = {
  name: 'countrycr',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/countrycr',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
