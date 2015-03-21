module.exports = function(config){
  config.set({

    basePath : './app/',

    preprocessors: {
      '**/templates/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templates'
    },

    files : [

      // Jasmine Helpers
      '../test/helpers.js',

      // jquery
      'bower_components/jquery/dist/jquery.min.js',

      // Vendor Libs
      'bower_components/gsap/src/minified/TweenMax.min.js',

      // Angular
      'bower_components/angular/angular.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-mocks/angular-mocks.js',

      // Templates
      '**/templates/*.html',

      // Main Module
      'app.js',

      // Vendor Libs
      'vendor/**/*.js',

      // Global
      'global/global.js',
      'global/**/*.js',

      // Dashboard
      'dashboard/dashboard.js',
      'dashboard/*.js'

    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-ng-html2js-preprocessor',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
