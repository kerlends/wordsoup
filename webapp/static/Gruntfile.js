module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            presets: ["react", "es2015"]
        },
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            loose: "all"
                        }]
                    ]
                },
                files: {
                    "./dist/module.js": ["./modules/index.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["modules/*.js", "modules/components/*.js"],
                tasks: ["browserify"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
};
