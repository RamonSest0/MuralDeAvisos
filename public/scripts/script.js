document.addEventListener('DOMContentLoaded', () => {

    updatePosts();
});

function updatePosts() {

    fetch("http://localhost:3000/api/all").then((response) => {

        return response.json();

    }).then((json) => {

        let postElements = '';
        let posts = JSON.parse(json)

        posts.forEach((post) => {
            let postElement = `        
            <div id="${post.id}" class="post">
            <div class="post-title">
                <h3>${post.title}</h3>
                <i class="fa fa-trash" onclick="deletePost(${post.id})"></i>
            </div>
            <div class="post-description">
                ${post.description}
            </div>
            <div class="line-mural"></div>
        </div>`;

            postElements += postElement;
        })

        document.querySelector('.mural').innerHTML = postElements;

    })
};

function createPost() {

    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;

    let post = { title, description };

    const options = {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    };

    fetch('http://localhost:3000/api/new', options).then(() => {

        updatePosts();
        document.querySelector('#title').value = '';
        document.querySelector('#description').value = '';

    });
};

function deletePost(post) {

    console.log(post.id);
    let postId = {id: post.id}

    const options = {method: 'DELETE',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(postId)
};

    fetch('http://localhost:3000/api/delete', options).then(()=>{
        updatePosts();
    })
};