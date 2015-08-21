# DragonNode.js Wordpress
Bundle with service to get the posts with the author from wordpress

## Installation
- Add bundle to the "package.json":
```javascript
{
    "dependencies": {
        "dragonnodejs-wordpress": "^1.2.0"
    }
}
```
- Run "npm install"
- Extend the configuration in "app.js":
```javascript
var config = {
    modules: {
        npm: [
            [require('dragonnodejs-wordpress'), {
                wordpress: {
                    url: process.env.WORDPRESS_URL
                }
            }]
        ]
    }
};
```
