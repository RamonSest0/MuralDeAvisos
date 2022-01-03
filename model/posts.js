module.exports = {

    posts: [
        {
            id: "rm122",
            title: "Teste de Título",
            description: "Teste de descrição"
        },

    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        let id = generateID();
        this.posts.push({ id, title, description });
    },

    deletePost(id) {

        this.posts.forEach((post, index) => {

            let postId = post.id;

            if (postId == id) {
                this.posts.splice(index, 1);
            };
        });
    },
};

function generateID() {
    return Math.random().toString(36).substring(2, 9);
};