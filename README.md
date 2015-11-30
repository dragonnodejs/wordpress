# DragonNode.js Wordpress
Bundle with service to get the posts and the users from wordpress

## Installation
- Run ```npm install dragonnodejs-wordpress --save```
- Add the bundle to the "app.js":
```javascript
let modules = [
    [require('dragonnodejs-wordpress'), [
        ['wordpress', { url: process.env.WORDPRESS_URL }]
    ]]
];
```
