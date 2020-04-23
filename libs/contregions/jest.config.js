module.exports = {
  name: 'contregions',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/contregions',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
