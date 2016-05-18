module.exports = {

    sass: {
        files: [
            '<%= paths.styles.src %>/styles.scss'
        ],
        tasks: ['sass:<%= build %>']
    },
    js: {
        files: [
            '<%= paths.scripts.src %>/*.js'
        ],
        tasks: ['uglify:<%= build %>']
    }
};