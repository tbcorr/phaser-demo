module.exports = {

    dev: {
        options: {
            outputStyle: 'expanded',
            sourceMap: true
        },
        files: {
            '<%= paths.styles.dist %>/styles.min.css': '<%= paths.styles.src %>/styles.scss'
        }
    },
    prod: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: {
            '<%= paths.styles.dist %>/styles.min.css': '<%= paths.styles.src %>/styles.scss'
        }
    }
};