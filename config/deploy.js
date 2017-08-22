/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    s3: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'eu-west-1'
    },
    's3-index': {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'eu-west-1'
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'test') {
    ENV.build.environment = 'production';
    ENV['s3'].bucket = 'merchants-app-test';
    ENV['s3-index'].bucket = 'merchants-app-test';    
    ENV.pipeline = {
      activateOnDeploy: true
    }
  }

  if (deployTarget === 'demo') {
    ENV.build.environment = 'production';
    ENV['s3'].bucket = 'merchants-app-demo';
    ENV['s3-index'].bucket = 'merchants-app-demo';
    ENV.pipeline = {
      activateOnDeploy: true
    }
  }

  // if (deployTarget === 'staging') {
  //   ENV.build.environment = 'production';
  // }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    ENV['s3'].bucket = 'merchants-app-staging';
    ENV['s3-index'].bucket = 'merchants-app-staging';
    ENV.pipeline = {
      activateOnDeploy: true
    }
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV['s3'].bucket = 'merchants-app-prod';
    ENV['s3-index'].bucket = 'merchants-app-prod';
    ENV.pipeline = {
      activateOnDeploy: true
    }
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};