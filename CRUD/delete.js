const prisma = require('../library/prismaClient');

prisma.post.delete({
    where: {
        id: 1,
    }
})
    .then((post) => {
        console.log("Post eliminato", post);
    })
    .catch((err) => {
        console.log(err);
    });
