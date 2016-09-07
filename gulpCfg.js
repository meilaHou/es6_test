/**
 * Created by Administrator on 2016/9/6.
 */
browserify: {
    // Enable source maps
    debug: true
    extensions: ['.coffee', '.hbs']
    bundleConfigs: [{
        entries:    './' + srcAssets + '/javascripts/application.js',
        dest:       developmentAssets + '/js',
        outputName: 'application.js'
    }, {
        entries:    './' + srcAssets + '/javascripts/head.js',
        dest:       developmentAssets + '/js',
        outputName: 'head.js'
    }]
}