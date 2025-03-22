module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-sonarqube-reporter'),
      require('karma-spec-reporter'),
    ],
    browsers: ['Firefox'],
    files: [
      { pattern: 'src/**/*.spec.ts', type: 'module' }, // Certifique-se de que os arquivos de teste existem e têm o formato correto
      { pattern: 'src/test.ts', type: 'module' },
      { pattern: 'src/test.ts', watched: false } // Especifique o tipo como 'module'.
    ],
    mime: {
      'text/x-typescript': ['ts', 'tsx'], // Adiciona suporte para TypeScript.
    },
    client: {
      jasmine: {
        random: false,
      },
      clearContext: false, // Mantém os resultados visíveis no navegador.
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    sonarqubeReporter: {
      basePath: 'src/app',
      filePattern: '**/*spec.ts',
      encoding: 'utf-8',
      outputFolder: 'reports',
      legacyMode: false,
      reportName: function (metadata) {
        return 'sonarqubeTestReport.xml';
      },
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/angular'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    junitReporter: {
      outputDir: 'junit',
    },
    reporters: ['progress', 'kjhtml', 'junit', 'coverage-istanbul', 'spec', 'sonarqube'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['FirefoxHeadless'],
    singleRun: false,
    restartOnFileChange: true,
  });
};
