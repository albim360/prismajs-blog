const prisma = require('../library/prismaClient');
const postList = require('../database/posts');

async function createManyPosts() {
    try {
        await prisma.post.createMany({
            data: postList.map((post) => ({
                title: post.title,
                content: post.content,
                slug: post.slug,
                image: post.image,
                published: post.published,
            })),
        });

        console.log('Posts creati con successo.');
    } catch (error) {
        console.error('Errore durante la creazione dei posts:', error);
    }
}

createManyPosts();
