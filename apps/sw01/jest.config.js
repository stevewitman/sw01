module.exports = {
  name: 'sw01',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw01',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
