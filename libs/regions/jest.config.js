module.exports = {
  name: 'regions',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/regions',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
