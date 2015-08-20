'use strict';

/**
 * Service to get the posts and the users from wordpress
 * @example
    wordpress: {
        url: process.env.WORDPRESS_URL
    }
 */

module.exports = function (config, libraries, services) {
    var _ = libraries.lodash,
        async = libraries.async,
        request = libraries.request;

    var wordpress = function (callback) {
        var posts, users = {};
        async.parallel(
            [
                function (next) {
                    request(config.url + '/wp-json/wp/v2/posts', function (err, res, body) {
                        posts = JSON.parse(body);
                        next();
                    });
                },
                function (next) {
                    request(config.url + '/wp-json/wp/v2/users', function (err, res, body) {
                        var data = JSON.parse(body);
                        _.each(data, function (user) {
                            users[user.id] = user;
                        });
                        next();
                    });
                }
            ],
            function () {
                callback({ posts: posts, users: users });
            }
        );
    };

    services.wordpress = wordpress;
};
