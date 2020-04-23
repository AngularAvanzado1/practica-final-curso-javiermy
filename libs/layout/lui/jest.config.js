module.exports = {
  name: 'layout-lui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/layout/lui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
