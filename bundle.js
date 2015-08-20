'use strict';

// Bundle with service to get the posts with the author from wordpress

module.exports = function (config, _, services) {
    config = {
        libraries: {
            async: require('async'),
            request: require('request')
        },
        directory: __dirname + '/modules/',
        modules: {
            directory: config
        }
    };
    require('dragonnodejs')(config, services);
};
