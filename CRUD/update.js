const prisma = require('../library/prismaClient');

prisma.post.update({
  where: {
    id: 1,
  },
  data: {
    title: 'New Title',
  },
  select: {
    id: true,
    title: true,
  },
})
 .then(updatedPost => {
    console.log("Post modificato", updatedPost);
  })
 .catch(err => {
    console.log(err);
  });
