'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            allFiles: ['Gruntfile.js',
                       'index.js', 'routes.js', './public/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
            }
        },
        mochacli: {
            all: ['test/**/*.js', './node_modules/xmpp-ftw*/test/**/*.js'],
            options: {
                reporter: 'spec',
                ui: 'tdd'
            }
        }
    })

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-mocha-cli')
    grunt.loadNpmTasks('grunt-nsp-package')

    // Configure tasks
    grunt.registerTask('default', ['test'])
    grunt.registerTask('test', ['mochacli', 'jshint', 'validate-package'])
}
