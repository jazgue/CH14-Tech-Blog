const { Comment } = requre('../models');

const commentData =
  [
    {
        comment_text: "Nice",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Cool",
        user_id: 2,
        post_id: 2
    }
  ];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;
  