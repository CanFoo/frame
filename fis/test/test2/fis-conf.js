fis.config.set('pack', {
    '/pkg/index.js': [
        'app/app.js',
        'app/b.js',
        'app/c.js',
    ]
});

fis.config.merge({
	settings : {
        postprocessor: {
            jswrapper: {
                type: 'amd'
            }
        },
        optimizer : {
            'uglify-js' : {
                output : {
                    max_line_len : 500,
                    ascii_only : true
                },
                mangle : {
                    except : [ 'require','define']
                }
            },
            'clean-css' : {
                keepBreaks : false
            },
        },
        spriter : {
            csssprites : {
                layout : 'matrix',
                margin : 20
            }
        }
     }
});

// fis.config.set('modules.postpackager', 'simple');