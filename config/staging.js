module.exports = {
  assets: {
    //Prod and stage should be the same
    build: true,
    compile: true,
    bundle: true,
    compress: true,
    gzip: true,
    fingerprinting: true,
    sourceMaps: true
  },
  emailProvider: {
    subjectPrefix: '[STAGE]'
  }
};
