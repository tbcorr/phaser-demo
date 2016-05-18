module.exports = {

	dev:{
		options: {
			compress: false,
			mangle: false,
			beautify: false
		},
		files: {
			'<%= paths.scripts.dist %>/javascript.min.js': [
				'<%= paths.scripts.src %>/*.js'
			],
			'<%= paths.scripts.dist %>/dependencies.min.js': [
				'<%= paths.bowerSrc %>/phaser/build/phaser.js'
			]
		}
	},
	prod:{
		options: {
            compress: true,
			mangle: true,
			beautify: false
		},
		files: {
			'<%= paths.scripts.dist %>/javascript.min.js': [
				'<%= paths.scripts.src %>/*.js'
			],
			'<%= paths.scripts.dist %>/dependencies.min.js': [
				'<%= paths.bowerSrc %>/phaser/build/phaser.js'
			]
		}
	}
};