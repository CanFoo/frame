/**
 * @file FIS 配置
 * @author
 */

fis.config.set('namespace', 'topic');

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);

if (fis.IS_FIS3) {
    fis.media('debug').match('*', {
        optimizer: null,
        useHash: false,
        deploy: fis.plugin('http-push', {
            receiver: 'http://127.0.0.1:8086/yog/upload',
            to: '/'
        })
    });
    fis.media('local').match('*', {
        optimizer: null,
        useHash: false,
        deploy: fis.plugin('http-push', {
            receiver: 'http://127.0.0.1:9091/yog/upload',
            to: '/'
        })
    });
    fis.media('debug-prod').match('*', {
        deploy: fis.plugin('http-push', {
            receiver: 'http://cp01-rdqa04-dev154.cp01.baidu.com:8089/yog/upload',
            to: '/'
        })
    });

    fis.match('server/conf/({ral,plugins,fis,user}/**)', {
        optimizer: null,
        useHash: false,
        postprocessor: null,
        release: '${config}/$1'
    });

    fis.match('*.tmpl', {
        isJsLike: true,
        parser: fis.plugin('utc', {
            LEFT_DELIMITER: '<%',
            RIGHT_DELIMITER: '%>'
        }),
        release: false
    });

    fis.match('client/static/({dep,utils,page}/**.js)', {
        isMod: true,
        useMap: true
    });

    fis.match('client/static/page/yingyin/**.js', {
        isMod: false
    });

    fis.media('prod').match('client/static/{dep,utils}/**.js', {
        packTo: '/${static}/pkg/vendor.js'
    });

    fis.media('prod').match('client/static/page/**.js', {
        packTo: '/${static}/pkg/page.js'
    });

    fis.media('prod').match('client/widget/**.js', {
        packTo: '/${static}/pkg/widget.js'
    });

    fis.media('prod').match('client/widget/**.{less,css}', {
        packTo: '/${static}/pkg/widget.css'
    });

    fis.media('prod').match('client/static/**.{less,css}', {
        packTo: '/${static}/pkg/common.css'
    });

    fis.match('**.sh', {
        release: false
    });

    fis.match('**.md', {
        release: false
    });

    fis.match('pkg/**.{css,js}', {
        useHash: true
    });

    fis.match('BCLOUD', {
        release: false
    });
}
else {
    fis.config.set('deploy', {
        debug: {
            to: '/',
            // yog2 默认的部署入口，使用调试模式启动 yog2 项目后，这个入口就会生效。IP与端口请根据实际情况调整。
            receiver: 'http://127.0.0.1:8086/yog/upload'
        }
    });
}
