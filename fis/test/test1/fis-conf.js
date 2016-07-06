fis.config.set('pack', {
    '/pkg/index.js': [
        'js/a.js',
        'js/b.js',
        'js/c.js',
    ]
});

fis.config.set('modules.postpackager', 'simple');