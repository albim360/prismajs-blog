const prisma = require('../library/prismaClient');

prisma.post.create({
    data: {
        title: "My first post",
        content: "This is my first post",
        slug: "my-first-post",
        image: "https://picsum.photos/200/300",
        published: true,
    },
})
   .then(post => {
        console.log(`Created new post: ${post.title}`);
    })
   .catch(e => {
        console.log(`Error: ${e}`);
    });