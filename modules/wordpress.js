'use strict';

/**
 * Service to get the posts and the users from wordpress
 * @example
    ['wordpress', { url: process.env.WORDPRESS_URL }]
 */

module.exports = (config, libraries, services) => {
    let async = libraries.async,
        request = libraries.request;

    let wordpress = (query, callback) => {
        if (!callback) {
            callback = query;
            query = '';
        }
        if (!config.url) {
            callback({ posts: [], users: [] });
            return;
        }
        let posts, users = {};
        async.parallel(
            [
                next => {
                    request(config.url + '/wp-json/wp/v2/posts' + query, (err, res, body) => {
                        posts = JSON.parse(body);
                        next();
                    });
                },
                next => {
                    request(config.url + '/wp-json/wp/v2/users', (err, res, body) => {
                        let data = JSON.parse(body);
                        for (let user of data) {
                            users[user.id] = user;
                        }
                        next();
                    });
                }
            ],
            () => { callback({ posts: posts, users: users }); }
        );
    };

    services.wordpress = wordpress;
};
