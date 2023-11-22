const prisma = require("../library/prismaClient");

prisma.post
  .deleteMany({
    where: {
      content: {
        contains: "Lorem",
      },
    },
  })
  .then((deletedPosts) => {
    console.log("Posts eliminati:", deletedPosts);
  })
  .catch((err) => {
    console.error(err);
  });
