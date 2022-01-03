const express = require('express');
const posts = require('../model/posts');
const router = express.Router()

router.get('/all', (request, response) => {

    response.json(JSON.stringify(posts.getAll()));
});

router.post('/new', express.json(), (request, response) => {
   
    let title = request.body.title;
    let description = request.body.description;

    posts.newPost(title, description);

    response.send("Post successfully added!");
});

router.delete('/delete', express.json(), (request, response) => {
    
    let id = request.body.id;

    posts.deletePost(id);
    response.send(`Id: ${id}, successfully deleted`)
});

module.exports = router;