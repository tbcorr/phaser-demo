module.exports = function(grunt) {

    grunt.template.addDelimiters('handlebars', '{{', '}}');

    require('load-grunt-tasks')(grunt);
    require('load-grunt-config')(grunt, {

        data: { // global grunt config data

            build: 'dev', // change for build type when running default task[dev, prod],

            paths: {
                styles: {
                    src: 'resources/sass', // sass path root
                    dist: 'public/css'
                },
                scripts : {
                    src : 'resources/js', // js path root
                    dist: 'public/js'
                },
                bowerSrc: 'bower_components'
            }
        }
    });
};