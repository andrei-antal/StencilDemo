exports.config = {
  bundles: [
    { components: ['my-progress'] },
  ],
  generateDistribution: true,
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
