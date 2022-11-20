const router = require('express').Router();
const { Post, User } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) =>{
    Post.findAll({
        attributes:[
            'id',
            'title',
            'content',
            'created'
        ],
        order: [['created', 'DESC']],
        include:[
            {
                model:User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment', 'post_id', 'user_id', 'created'],
                include:{
                    model:User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData.reverse()))
    .catch(err => {
        console.log(err);
        res.statusMessage(500).json(err);
    });
});