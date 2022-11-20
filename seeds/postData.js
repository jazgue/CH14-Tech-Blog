const { Post } = require('../models');

const postData=
[
    {
        title: 'Javascript',
        content: 'As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries',
        user_id: 1
    },
    {
        title: 'HTML',
        content: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
        user_id: 2
    },
    {
        title:'CSS',
        content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. ',
        user_id: 3
    }
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;