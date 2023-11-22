const prisma = require('../library/prismaClient');

prisma.post.findUnique({
  select: {
    id: true,
    title: true,
    published: true,
  },
  where: {
    id: 1,
  },
})
  .then((post) => console.log(post))
  .catch((error) => console.log(error));
